import React from 'react'
import styles from '@/styles/adminDashboardContent.module.css'
import Link from 'next/link'
import { TiTickOutline } from 'react-icons/ti'
import { Box } from '@mui/material'

const ClassesCard = () => {
    return (
        <Link href={'#'} className={styles.card} style={{ background: "#9E4EE0" }}>
            <div className={styles.icon_Container}>
                <TiTickOutline size={'2.6rem'} color='#9E4EE0' />
            </div>
            <Box className={styles.totalTextContainer} sx={{ gap: '4px!important' }}>
                <p className={styles.totalText}>Class</p>
                <p className={styles.totalNumber}>K1</p>
                <p className={styles.totalText}>Class Teacher: Ms. Rose Nakimuli</p>
            </Box>
        </Link>
    )
}

export default ClassesCard
