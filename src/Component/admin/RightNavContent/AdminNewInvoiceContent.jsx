import React, { useMemo, useRef } from 'react'
import styles from '@/styles/adminFinance.module.css'
import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material'
import { FormControl, Select, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import ItemsInvoiceTable from '../Table/ItemsInvoiceTable'
import { AiFillCreditCard } from 'react-icons/ai'
import { Switch } from 'antd'

const AdminNewInvoiceContent = () => {
    const imageRef = useRef()

    const [invoiceItems, setInvoiceItems] = useState([{
        id: 1,
        item_name: '',
        category: '',
        qty: '',
        price: '',
        amount: '',
        discount: '',
    }])

    const [signature, setSignature] = useState('')
    const [isRound, setIsRound] = useState(false)
    const [roundedValue, setRoundedValue] = useState(0)
    const [taxableValue, setTaxableValue] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const handleFileChange = (e) => {
        const files = e.target.files[0]
        if (files) {
            setSignature(files)
        }
    }

    useMemo(() => {

        const newData = [...invoiceItems]
        let totalAmount = 0
        newData.map(item => {
            const totalDiscount = (item.amount * item.discount) / 100
            const priceAfterDiscount = item.amount - totalDiscount
            totalAmount = totalAmount + priceAfterDiscount
        })
        const roundOffed = isRound ? parseInt(totalAmount) : totalAmount
        setRoundedValue(isRound ? Number((totalAmount % 1).toFixed(2)) : 0)
        setTotalAmount(roundOffed)

    }, [invoiceItems, isRound])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

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
            <form className={styles.invoice_create_Container} onSubmit={handleSubmit}>
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
                                    <p style={{ fontSize: '1rem', fontWeight: '700' }}>Due Date <span style={{ color: '#4e6ce0', cursor: "pointer" }} >
                                        Select
                                    </span>
                                    </p>
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
                <div className={styles.invoiceBottom}>
                    <div className={styles.invoiceBottom_left}>
                        <h4>More Fields</h4>
                        <div className={styles.paymentDetailsBox}>
                            <h5 style={{ fontSize: '1rem' }}>Payment details</h5>
                            <Box sx={{ marginTop: 1, padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className={styles.cardBox}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <p>Debit Card</p>
                                    <p>XXXXXXXXXXXX-</p>
                                    <p>2541 Dena Bank</p>
                                </Box>
                                <AiFillCreditCard color='#fff' size={'2rem'} />
                            </Box>
                        </div>
                        <div>
                            <TextField
                                sx={{ width: '100%', marginTop: 1 }}
                                focused
                                required
                                variant="outlined"
                                name='terms'
                                placeholder='Add Terms & Conditions'
                            />
                            <TextField
                                sx={{ width: '100%', marginTop: 1 }}
                                focused
                                required
                                variant="outlined"
                                name='notes'
                                placeholder='Add Notes'
                            />
                        </div>
                    </div>
                    <div className={styles.invoiceBottom_right}>
                        <h4>Summary</h4>
                        <div className={styles.summaryDetailsBox}>
                            <Box sx={{ marginTop: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ fontSize: '1rem', fontWeight: '500' }}>Taxable Amount</p>
                                <p style={{ fontSize: '1rem', fontWeight: '700' }}>$21</p>
                            </Box>

                            <Box sx={{ marginTop: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <p style={{ fontSize: '1rem', fontWeight: '500' }}>Round off<span style={{ marginLeft: '8px' }}>
                                    <Switch size="small" checked={isRound} onChange={(values) => setIsRound(values)} /></span></p>
                                <p style={{ fontSize: '1rem', fontWeight: '700' }}>${roundedValue}</p>
                            </Box>

                            <Box sx={{ paddingLeft: 1, marginTop: 2 }}>
                                <Typography variant='body1' sx={{ color: '#3556dc', fontWeight: '600', fontSize: '.8rem', cursor: 'pointer' }}>Addition Charges</Typography>
                                <Typography variant='body1' sx={{ color: '#3556dc', fontWeight: '600', fontSize: '.8rem', cursor: 'pointer', marginTop: 1 }}>Add More Discount</Typography>
                            </Box>

                            <hr style={{ height: '1px' }} />
                            <Box sx={{ marginTop: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#3556dc' }}>Total Amount</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#3556dc' }}>${totalAmount}</p>
                            </Box>

                        </div>
                        <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'flex-end', flexDirection: 'column', gap: 2 }}>
                            <div className={styles.fileUpload}>
                                {
                                    signature ? <Box className={styles.uploadedImage} sx={{ backgroundImage: `url(${URL.createObjectURL(signature)})` }} onClick={() => {
                                        imageRef.current.click()
                                    }}>
                                        <input ref={imageRef} type='file' style={{ display: "none" }} name='logo_img' accept='.png, .jpg, .jpeg' onChange={handleFileChange} />
                                    </Box>
                                        : <label className={styles.labelFont}>Upload Sign
                                            <input type='file' style={{ display: "none" }} name='logo_img' accept='.png, .jpg, .jpeg' onChange={handleFileChange} />
                                        </label>
                                }
                            </div>
                            <TextField
                                sx={{ width: '80%', marginTop: 1 }}
                                focused
                                required
                                variant="outlined"
                                name='name_of_signatory'
                                placeholder='Name Of Signatory'
                            />
                            <Button variant='contained' size='large' sx={{ marginTop: 1, background: '#4c6ae3' }} type='submit'>Save Invoice</Button>
                        </Box>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminNewInvoiceContent
