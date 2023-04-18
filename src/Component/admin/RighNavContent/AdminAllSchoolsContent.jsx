import React from 'react'
import styles from '@/styles/adminSchoolByCountry.module.css'
import SchoolsList from '../Table/SchoolsList'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from '@/redux/store';
import { getAllSchoolsRequest, getAllSchoolsReset } from '@/redux/slices/admin/getAllSchools';
import { Button } from 'antd'
import { flagLink } from '@/utils/constant';
import CountrySchoolCard from '@/Component/Generic/CountrySchoolCard';

const AdminAllSchoolsContent = () => {

    const getAllSchoolsState = useSelector(state => state.getAllSchools)

    const [response, setResponse] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(getAllSchoolsRequest())
    }, [])

    useEffect(() => {
        if (getAllSchoolsState.isSuccess) {
            setResponse(getAllSchoolsState.data?.data)
            setData(getAllSchoolsState.data?.data?.results)
            dispatch(getAllSchoolsReset())
        }
    }, [getAllSchoolsState.isSuccess])

    const handlePagination = (requestUrl) => {
        dispatch(getAllSchoolsRequest(`?${requestUrl.split('?')[1]}`))
    }

    return (
        <div>
            <div className={styles.countryCardContainer}>
                <CountrySchoolCard
                    link={flagLink.tanzania}
                    count={132}
                    country={'Tanzania'}
                />
                <CountrySchoolCard
                    link={flagLink.s_africa}
                    count={132}
                    country={'S. Africa'}
                />
                <CountrySchoolCard
                    link={flagLink.s_sudan}
                    count={132}
                    country={'S. Sudan'}
                />
                <CountrySchoolCard
                    link={flagLink.rwanda}
                    count={132}
                    country={'Rwanda'}
                />
                <CountrySchoolCard
                    link={flagLink.kenya}
                    count={132}
                    country={'Kenya'}
                />
                <CountrySchoolCard
                    link={flagLink.uganda}
                    count={132}
                    country={'Uganda'}
                />
                <CountrySchoolCard
                    link={flagLink.ghana}
                    count={132}
                    country={'Ghana'}
                />
                <CountrySchoolCard
                    link={flagLink.nigeria}
                    count={132}
                    country={'Nigeria'}
                />
            </div>
            <div className={styles.tableContainer}>
                <p className={styles.topSchools_text}>Top Schools</p>
                <div style={{ marginTop: "1.5rem" }}>
                    <SchoolsList data={data} />
                    <div className={styles.flexButton}>
                        <Button type="primary" disabled={!response?.previous} onClick={() => handlePagination(response.previous)}>Prev</Button>
                        <Button type="primary" disabled={!response?.next} onClick={() => handlePagination(response.next)}>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAllSchoolsContent
