import React from 'react'
import styles from '@/styles/adminSchoolByCountry.module.css'
import SchoolsList from '../Table/SchoolsList'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from '@/redux/store';
import { getAllSchoolsRequest, getAllSchoolsReset } from '@/redux/slices/admin/getAllSchools';
import { Button } from '@mui/material';

const AdminPlansCountrySchoolContent = ({ country, plans }) => {

    const getAllSchoolsState = useSelector(state => state.getAllSchools)

    const [response, setResponse] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        if (country) {
            const payload = `country=${country.toString()}&subscription=${plans}`
            dispatch(getAllSchoolsRequest(payload))
        }

    }, [country, plans])

    useEffect(() => {
        if (getAllSchoolsState.isSuccess) {
            setResponse(getAllSchoolsState.data?.data)
            setData(getAllSchoolsState.data?.data?.results)
            dispatch(getAllSchoolsReset())
        }
    }, [getAllSchoolsState.isSuccess])

    const handlePagination = (requestUrl) => {
        dispatch(getAllSchoolsRequest(requestUrl.split('?')[1]))
    }

    return (
        <div>

            <div className={styles.tableContainer}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p className={styles.topSchools_text}>Schools</p>
                    <Button variant='contained' size='large'>Download</Button>
                </div>
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

export default AdminPlansCountrySchoolContent
