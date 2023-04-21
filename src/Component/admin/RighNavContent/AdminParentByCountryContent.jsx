import React from 'react'
import styles from '@/styles/adminSchoolByCountry.module.css'
import { FaRegBuilding } from 'react-icons/fa'
import { SlGraduation } from 'react-icons/sl'
import { AiOutlineHeart } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from '@/redux/store';
import { getAllParentsRequest, getAllParentsReset } from '@/redux/slices/admin/getAllParents';
import { Button } from 'antd'
import Link from 'next/link'
import ParentsList from '../Table/ParentsList'

const AdminParentByCountryContent = ({ country }) => {

    const getAllParentsState = useSelector(state => state.getAllParents)

    const [response, setResponse] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        if (country) {
            const payload = `?country=${country.toString()}`
            dispatch(getAllParentsRequest(payload))
        }
    }, [country])

    useEffect(() => {
        if (getAllParentsState.isSuccess) {
            setResponse(getAllParentsState.data?.data)
            setData(getAllParentsState.data?.data?.results)
            dispatch(getAllParentsReset())
        }
    }, [getAllParentsState.isSuccess])

    const handlePagination = (requestUrl) => {
        dispatch(getAllParentsRequest(`?${requestUrl.split('?')[1]}`))
    }

    return (
        <div>
            <div className={styles.cardContainer}>
                <Link href={`/dashboard/admin/parent-by-country-plans?country=${country}&plans=KAINO_PLUS`} className={styles.card_parent} aria-disabled>
                    <div className={styles.iconContainer}>
                        <FaRegBuilding size={'2.5rem'} color='#4EAF96' />
                    </div>
                    <div>
                        <p style={{ fontWeight: '500', fontSize: "1.2rem" }}>KAINO PLUS</p>
                        <p style={{ fontWeight: '700', fontSize: "2.2rem" }}>
                            {
                                data.filter(item => item.subscriptions === 'KAINO_PLUS').length
                            }
                        </p>
                    </div>
                </Link>
                <Link href={`/dashboard/admin/parent-by-country-plans?country=${country}&plans=KAINO_BASIC`} className={styles.card_parent}>
                    <div className={styles.iconContainer}>
                        <SlGraduation size={'2.5rem'} color='#4EAF96' />
                    </div>
                    <div>
                        <p style={{ fontWeight: '500', fontSize: "1.2rem" }}>KAINO BASIC</p>
                        <p style={{ fontWeight: '700', fontSize: "2.2rem" }}>
                            {
                                data.filter(item => item.subscriptions === 'KAINO_BASIC').length
                            }
                        </p>
                    </div>
                </Link>
                <Link href={`/dashboard/admin/parent-by-country-plans?country=${country}&plans=KAINO_SOCIAL`} className={styles.card_parent}>
                    <div className={styles.iconContainer}>
                        <AiOutlineHeart size={'2.5rem'} color='#4EAF96' />
                    </div>
                    <div>
                        <p style={{ fontWeight: '500', fontSize: "1.2rem" }}>KAINO SOCIAL</p>
                        <p style={{ fontWeight: '700', fontSize: "2.2rem" }}>
                            {
                                data.filter(item => item.subscriptions === 'KAINO_SOCIAL').length
                            }
                        </p>
                    </div>
                </Link>
            </div>
            <div className={styles.tableContainer}>
                <p className={styles.topSchools_text}>Top Parents</p>
                <div style={{ marginTop: "1.5rem" }}>
                    <ParentsList data={data} />
                    <div className={styles.flexButton}>
                        <Button type="primary" disabled={!response?.previous} onClick={() => handlePagination(response.previous)}>Prev</Button>
                        <Button type="primary" disabled={!response?.next} onClick={() => handlePagination(response.next)}>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminParentByCountryContent
