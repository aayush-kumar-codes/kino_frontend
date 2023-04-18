import { getAllSchoolsRequest, getAllSchoolsReset } from '@/redux/slices/admin/getAllSchools'
import { dispatch } from '@/redux/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styles_new from '@/styles/adminLessions.module.css'
import styles from '@/styles/schoolProfile.module.css'
import { flagLink } from '@/utils/constant'
import { Button } from '@mui/material'
import { AiOutlinePhone } from 'react-icons/ai'

function SchoolProfileContent({ id }) {
  const [data, setData] = useState({})

  const router = useRouter()

  const getAllSchoolsState = useSelector(state => state.getAllSchools)

  useEffect(() => {
    if (id) {
      dispatch(getAllSchoolsRequest(`${id}/`))
    }
  }, [id])

  useEffect(() => {
    if (getAllSchoolsState.isSuccess) {
      setData(getAllSchoolsState.data?.data?.results[0])
      dispatch(getAllSchoolsReset())
    }
  }, [getAllSchoolsState.isSuccess])

  useEffect(() => {
    if (getAllSchoolsState.isError) {
      router.push('/dashboard/admin')
      dispatch(getAllSchoolsReset())
    }
  }, [getAllSchoolsState.isError])

  return (
    <div>
      <div className={styles_new.breadcrumbs}>
        <p className={styles_new.breadcrumbs_left}>Schools Details</p>
        <p className={styles_new.breadcrumbs_right}>Schools /<span> Schools Details</span></p>
      </div>
      <div style={{ marginTop: '3rem', paddingLeft: '1rem' }}>
        <p className={styles_new.breadcrumbs_left}>Schools Profile</p>
        <div className={styles.card}>
          <div className={styles.school_Card}>
            <div className={styles.schoolInfo}>
              <img src={data?.logo_img || flagLink.kenya} alt="logo" height={'150px'} width={'150px'} />
              <div>
                <p className={styles.name}>{data?.name}</p>
                <p className={styles.description}>{data?.description}</p>
              </div>
            </div>
          </div>
          <div className={styles.counterContainer}>
            <div>
              <p className={styles.totalP}>Total Students</p>
              <p className={styles.counterP}>{data?.total_students}</p>
            </div>
            <div>
              <p className={styles.totalP}>Total Teachers</p>
              <p className={styles.counterP}>{data?.total_teachers}</p>
            </div>
            <div>
              <p className={styles.totalP}>Year of Etablishment</p>
              <p className={styles.counterP}>{new Date(data?.year_established).getFullYear()}</p>
            </div>
            <div>
              <p className={styles.totalP}>Grade Offered</p>
              <p className={styles.counterP}>K1-K3</p>
            </div>
            <div>
              <Button variant='contained' size='large' sx={{ background: "#70C4CF" }}>{data?.subscriptions}</Button>
            </div>
          </div>
        </div>
        <div className={styles.secondCard}>
          <div className={styles.secondCardLeft}>
            <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>Personal Details:</p>
            <div className={styles.iconContainer}>
              <AiOutlinePhone />
              <div>
                <p>Mobile</p>
                <p>{data?.phone}</p>
              </div>
            </div>
          </div>
          <div className={styles.secondCardRight}>
            right
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolProfileContent