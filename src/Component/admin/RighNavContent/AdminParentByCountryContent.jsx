import React from 'react'
import styles from '@/styles/adminSchoolByCountry.module.css'
import styles_new from '@/styles/adminLessions.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from '@/redux/store';
import { getAllParentsRequest, getAllParentsReset } from '@/redux/slices/admin/getAllParents';
import { Button } from '@mui/material';
import { Input, Select } from 'antd';
import { useFormik } from 'formik';
import { RxCross1 } from 'react-icons/rx'
import exportFromJSON from 'export-from-json'
import ParentsList from '../Table/ParentsList';

const AdminParentByCountryContent = ({ country }) => {

    const getAllParentsState = useSelector(state => state.getAllParents)
    const [pageSize, setPageSize] = useState(10)
    const [response, setResponse] = useState({})
    const [data, setData] = useState([])
    const fileName = 'download'
    const exportType = exportFromJSON.types.csv

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            phone: ''
        },
        onSubmit: (values) => {
            if (values.id)
                dispatch(getAllParentsRequest(`${values.id}/`))
            else {
                let payload;
                if (values.phone && values.name)
                    payload = `?phone=${values.phone}&name=${values.name}`
                else if (values.phone)
                    payload = `?phone=${values.phone}`
                else if (values.name)
                    payload = `?name=${values.name}`
                dispatch(getAllParentsRequest(payload))
            }
        },
    });

    useEffect(() => {
        if (country) {
            const payload = `?country=${country.toString()}&page_size=${pageSize}`
            dispatch(getAllParentsRequest(payload))
        }

    }, [country, pageSize])

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
            <div className={styles_new.breadcrumbs}>
                <p className={styles_new.breadcrumbs_left}>Parents</p>
                <p className={styles_new.breadcrumbs_right}>Dashboard /<span> Parents</span></p>
            </div>
            <form className={styles_new.form} onSubmit={formik.handleSubmit}>
                <Input
                    type="text"
                    name="id"
                    className={styles_new.form_input}
                    placeholder="Search by ID..."
                    value={formik.values.id}
                    onChange={formik.handleChange}
                />
                <Input
                    type="text"
                    name="name"
                    className={styles_new.form_input}
                    disabled={formik.values.id}
                    placeholder="Search by Name..."
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <Input
                    type="text"
                    name="phone"
                    disabled={formik.values.id}
                    className={styles_new.form_input}
                    placeholder="Search by Mobile..."
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                <Button type="submit" variant="contained" size="large" disabled={!formik.dirty}>
                    Search
                </Button>
            </form>
            <Button variant="contained" size="large" disabled={!formik.dirty} sx={{ background: "red", marginTop: '1rem' }}
                onClick={() => {
                    formik.resetForm()
                    const payload = `?country=${country.toString()}`
                    dispatch(getAllParentsRequest(payload))
                }}
            >
                <RxCross1 />
            </Button>
            <div className={styles.tableContainer}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p className={styles.topSchools_text}>Parents</p>
                    <Button variant='contained' size='large' disabled onClick={() => exportFromJSON({ data, fileName, exportType })}>Download</Button>
                </div>
                <div className={styles_new.pagination}>
                    <span>Show</span>
                    <Select
                        defaultValue={pageSize}
                        style={{ width: 80 }}
                        options={[
                            { value: 10, label: '10' },
                            { value: 25, label: '20' },
                            { value: 50, label: '50' },
                        ]}
                        onChange={(values => setPageSize(values))}
                    />
                    <span>entries</span>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                    <ParentsList data={data} />
                </div>
                <div className={styles_new.bottom_Pagination}>
                    <p>Showing {response ? 1 : 0} to {response?.count || 0} of {response?.count || 0} entries</p>
                    <div>
                        <Button disabled={!response.previous} variant="outlined" size="medium" onClick={() => handlePagination(response.previous)}>Previous</Button>
                        <Button variant="contained" size="medium">1</Button>
                        <Button disabled={!response.next} variant="outlined" size="medium" onClick={() => handlePagination(response.next)}>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminParentByCountryContent
