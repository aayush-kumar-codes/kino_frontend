import React from 'react'
import styles from '@/styles/adminFinance.module.css'
import { Box, Button } from '@mui/material'
import { BsBuildingCheck, BsCashStack, BsCircle } from 'react-icons/bs'
import { BiDollar } from 'react-icons/bi'
import { AiOutlineCamera } from 'react-icons/ai'
import { FinanceHomeChart } from '../Chart/FinanceHomeChart'
import { FormControl, Select, MenuItem } from '@mui/material';
import InvoicesTable from '../Table/InvoicesTable'
import { useState } from 'react'
import { useRouter } from 'next/router'

const AdminFinanceContent = () => {
    const [data, setData] = useState([])
    const [response, setResponse] = useState({})
    const router = useRouter()
    return (
        <div>
            <div className={styles.invoicesBtn}>
                <p>Finance Dashboard</p>
                <Button sx={{ padding: '16px 44px' }} variant='contained' size='large' onClick={() => router.push('/dashboard/admin/all-invoices')}>Invoices</Button>
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
            <Box sx={{ marginTop: 4, padding: '1rem', background: '#fff', borderRadius: '10px' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr', paddingBottom: 6, alignItems: 'center' }}>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: '#898F95' }}>Schools Financial Performance</p>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><BsCircle /><p>Kaino Plus</p></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><BsCircle /><p>Kaino Basic</p></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><BsCircle /><p>Kaino Social</p></Box>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                id="select-period"
                                value={'This Month'}
                                label="Time"
                            >
                                <MenuItem value={'This Month'}>This Month</MenuItem>
                                <MenuItem value={'This Weekly'}>This Weekly</MenuItem>
                                <MenuItem value={'This Day'}>This Day</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <FinanceHomeChart />
            </Box>
            <div className={styles.invocesContainer}>
                <p className={styles.tableText}>Latest Payments</p>
                <InvoicesTable data={data} />
                <div className={styles.bottom_Pagination}>
                    <p>Showing {response?.count ? 1 : 0} to {response?.count || 0} of {response?.count || 0} entries</p>
                    <Button variant='outlined' size='large'>Show More</Button>
                    <div>
                        <Button disabled={!response.previous} variant="outlined" onClick={() => handlePagination(response.previous)} size="medium">Previous</Button>
                        <Button variant="contained" size="medium">1</Button>
                        <Button disabled={!response.next} variant="outlined" onClick={() => handlePagination(response.next)} size="medium">Next</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminFinanceContent
