import React from 'react'
import styles from '@/styles/adminFinance.module.css'
import Link from 'next/link'
import { Box, Button } from '@mui/material'
import { FormControl, Select, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import ItemsInvoiceTable from '../Table/ItemsInvoiceTable'

const AdminNewInvoiceContent = () => {

    const [invoiceItems, setInvoiceItems] = useState([{
        id: 1,
        item_name: '',
        category: '',
        qty: '',
        price: '',
        amount: '',
        discount: '',
    }])

    return (
        <div>
            <div className={styles.invoice_page_Btn}>
                <div className={styles.rightButtonContainer}>
                    <Link className={styles.linkText} href={'#'}><div className={styles.backtoCircle} />Back to Invoice List</Link>
                    <Link className={styles.linkText} href={'#'}>Preview</Link>
                    <Button variant='contained' sx={{ background: '#4c6ae3', color: '#fff', fontWeight: '500' }} size='large'>Delete Invoice</Button>
                    <Button variant='contained' sx={{ background: '#4c6ae3', color: '#fff', fontWeight: '500' }} size='large'>Save Draft</Button>
                </div>
            </div>
            <div className={styles.invoice_create_Container}>
                <div className={styles.invoice_details}>
                    <div>
                        <FormControl focused fullWidth size='small'>
                            <p style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '10px' }}>Customer Name</p>
                            <Select
                                labelId="customer-label"
                                id="customer"
                                value={10}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ marginTop: 2 }}>
                            <p style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '10px' }}>PO Number</p>
                            <TextField
                                sx={{ width: '100%' }}
                                focused
                                required
                                size='small'
                                id="outlined-adornment-po_no"
                                placeholder='Enter Reference Number'
                                variant="outlined"
                                name='name'
                            />
                        </Box>
                    </div>
                    <div>
                        <p style={{ fontWeight: '700', fontSize: '1rem' }}>Invoice details</p>
                        <div className={styles.invoice_details_right}>
                            <Box sx={{ borderBottom: '1px solid #dcdada' }} className={styles.invoice_details_right_div}>
                                <p style={{ fontSize: '1rem', fontWeight: '700' }}>Invoice No <span style={{ color: '#4e6ce0' }}>IN00000005445</span></p>
                            </Box>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                <Box sx={{ borderRight: '1px solid #dcdada' }} className={styles.invoice_details_right_div}>
                                    <p style={{ fontSize: '1rem', fontWeight: '700' }}>Date <span style={{ color: '#4e6ce0' }}>
                                        25/02/2023
                                    </span></p>
                                </Box>
                                <Box className={styles.invoice_details_right_div}>
                                    <p style={{ fontSize: '1rem', fontWeight: '700' }}>Due Date <span style={{ color: '#4e6ce0', cursor: "pointer" }}>
                                        Select
                                    </span></p>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
                <hr style={{ height: '1px' }} />
                <Box sx={{ marginTop: 2 }} className={styles.invoice_details}>
                    <div>
                        <p className={styles.from_toText}>Invoice From <span style={{ color: '#4e6ce0', marginLeft: '2px', fontSize: '.8rem', fontWeight: '700' }}>Edit Address</span></p>
                        <Box sx={{ marginTop: 1 }} className={styles.address}>
                            <p>+26621237627</p>
                            <p>Address Line 1 ,Address Line2</p>
                            <p>ZipCode ,City ,Country</p>
                        </Box>
                    </div>
                    <div>
                        <p className={styles.from_toText}>Invoice To</p>
                        <Box sx={{ marginTop: 1 }} className={styles.address}>
                            <p>+26621237627</p>
                            <p>Address Line 1 ,Address Line2</p>
                            <p>ZipCode ,City ,Country</p>
                        </Box>
                    </div>
                </Box>
                <Box sx={{ marginTop: 4 }}>
                    <p style={{ color: '#617CE6', fontSize: '1.2rem', fontWeight: '700' }}>Items Details</p>
                    <Box sx={{ marginTop: 2 }}>
                        <ItemsInvoiceTable data={invoiceItems} setData={setInvoiceItems} />
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default AdminNewInvoiceContent
