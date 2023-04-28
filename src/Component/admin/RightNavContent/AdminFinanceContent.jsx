import React from 'react'
import styles from '@/styles/adminFinance.module.css'
import { Box, Button } from '@mui/material'
import { BsBuildingCheck, BsCashStack } from 'react-icons/bs'
import { BiDollar } from 'react-icons/bi'
import { AiOutlineCamera } from 'react-icons/ai'
import { FinanceHomeChart } from '../Chart/FinanceHomeChart'

const AdminFinanceContent = () => {
    return (
        <div>
            <div className={styles.invoicesBtn}>
                <p>Finance Dashboard</p>
                <Button sx={{ padding: '16px 44px' }} variant='contained' size='large'>Invoices</Button>
            </div>
            <div className={styles.finance_card_container}>
                <div className={styles.finance_card}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <p style={{ fontSize: '1.4rem', fontWeight: '500', letterSpacing: '2px' }}>Total Schools</p>
                        <BsBuildingCheck size={'2rem'} />
                    </Box>
                    <p style={{ marginTop: "8px", fontWeight: '700', fontSize: '2rem' }}>678</p>
                    <div className={styles.filler}>
                        <Box sx={{ height: '.8rem', width: '40%', borderRadius: '12px', background: '#E7FF88' }} />
                    </div>
                    <p style={{ fontSize: '1rem', marginTop: '1rem' }}>+ 10 Since last month</p>
                </div>

                <div className={styles.finance_card} style={{ background: '#3A93D6' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <p style={{ fontSize: '1.4rem', fontWeight: '500', letterSpacing: '2px' }}>Paid</p>
                        <BiDollar size={'2rem'} />
                    </Box>
                    <p style={{ marginTop: "8px", fontWeight: '700', fontSize: '2rem' }}>154</p>
                    <div className={styles.filler} style={{ background: '#6BAEE0' }}>
                        <Box sx={{ height: '.8rem', width: '40%', borderRadius: '12px', background: '#B2CEB1' }} />
                    </div>
                    <p style={{ fontSize: '1rem', marginTop: '1rem' }}>+ 04% Since last month</p>
                </div>

                <div className={styles.finance_card} style={{ background: '#9E4EE0' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <p style={{ fontSize: '1.4rem', fontWeight: '500', letterSpacing: '2px' }}>Unpaid</p>
                        <AiOutlineCamera size={'2rem'} />
                    </Box>
                    <p style={{ marginTop: "8px", fontWeight: '700', fontSize: '2rem' }}>524</p>
                    <div className={styles.filler} style={{ background: '#B67AE8' }}>
                        <Box sx={{ height: '.8rem', width: '40%', borderRadius: '12px', background: '#FF0000' }} />
                    </div>
                    <p style={{ fontSize: '1rem', marginTop: '1rem' }}>- 23% Since last month</p>
                </div>

                <div className={styles.finance_card} style={{ background: '#EA8858' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <p style={{ fontSize: '1.4rem', fontWeight: '500', letterSpacing: '2px' }}>History</p>
                        <BsCashStack size={'2rem'} />
                    </Box>
                    <p style={{ marginTop: "8px", fontWeight: '700', fontSize: '2rem' }}>$453</p>
                    <div className={styles.filler} style={{ background: '#EFA682' }}>
                        <Box sx={{ height: '.8rem', width: '40%', borderRadius: '12px', background: '#fff' }} />
                    </div>
                    <p style={{ fontSize: '1rem', marginTop: '1rem' }}>+ 06% Since last month</p>
                </div>
            </div>
            <Box sx={{ marginTop: 4, padding: '2rem 1rem', background: '#fff', borderRadius: '10px' }}>
                <FinanceHomeChart />
            </Box>
        </div>
    )
}

export default AdminFinanceContent
