import React, { useMemo, useRef } from 'react'
import styles from '@/styles/adminFinance.module.css'
import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material'
import { FormControl, Select, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import ItemsInvoiceTable from '../Table/ItemsInvoiceTable'
import { AiFillCreditCard } from 'react-icons/ai'
import { Switch } from 'antd'
import { useRouter } from 'next/router'
import PreviewInvoiceModal from '../Modal/PreviewInvoiceModal'
import InvoiceView from '../Invoice/InvoiceView'
import { useEffect } from 'react'
import { dispatch } from '@/redux/store'
import { preInvoiceRequest, preInvoiceReset } from '@/redux/slices/admin/preInvoice'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { createInvoiceRequest, createInvoiceReset } from '@/redux/slices/admin/createInvoice'

const AdminNewInvoiceContent = () => {
    const imageRef = useRef()
    const router = useRouter()
    const preInvoiceState = useSelector(state => state.preInvoice)
    const createInvoiceState = useSelector(state => state.createInvoice)
    const [invoiceDetails, setInvoiceDetails] = useState({})
    const [invoiceItems, setInvoiceItems] = useState([{
        id: 1,
        item_name: 'Subscription',
        plan: 'KAINO_PLUS',
        quantity: 1,
        price: '',
        amount: '',
        discount: '',
    }])

    const [invoiceTo, setInvoiceTo] = useState('')
    const [customerId, setcustomerId] = useState('')
    const [signature, setSignature] = useState('')
    const [roundedValue, setRoundedValue] = useState(0)
    const [taxableValue, setTaxableValue] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [poNumber, setPoNumber] = useState('')
    const [signee, setSignee] = useState('')
    const [previewData, setPreviewData] = useState({})
    const [invoiceFrom, setinvoiceFrom] = useState({
        id: '',
        mobile_no: "",
        address: "",
        zip_code: ""
    })
    const [dueDate, setDueDate] = useState('')
    const [open, setOpen] = useState(false);
    const [isRound, setIsRound] = useState(false)
    const todayDate = moment().format('DD/MM/YYYY')

    useMemo(() => {

        const newData = [...invoiceItems]
        let totalAmount = 0
        newData.map(item => {
            const totalDiscount = (item.amount * item.discount) / 100
            const priceAfterDiscount = item.amount - totalDiscount
            totalAmount = totalAmount + priceAfterDiscount
        })
        setTaxableValue(totalAmount)
        const roundOffed = isRound ? parseInt(totalAmount) : totalAmount
        setRoundedValue(isRound ? Number((totalAmount % 1).toFixed(2)) : 0)
        setTotalAmount(roundOffed)

    }, [invoiceItems, isRound])

    useEffect(() => {
        dispatch(preInvoiceRequest())
    }, [])

    useEffect(() => {
        if (preInvoiceState.isSuccess) {
            setInvoiceDetails(preInvoiceState.data?.data)
            setinvoiceFrom(preInvoiceState.data?.data?.invoice_from)
            dispatch(preInvoiceReset())
        }
    }, [preInvoiceState.isSuccess])

    useEffect(() => {
        if (createInvoiceState.isSuccess) {
            dispatch(createInvoiceReset())
            router.push('/dashboard/admin/all-invoices')
        }
    }, [createInvoiceState.isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault()
        const invoiceOrg =
        {
            organization: parseInt(customerId),
            po_number: poNumber,
            invoice_number: invoiceDetails?.invoice_no,
            invoice_from: invoiceFrom.address,
            name_of_signee: signee ? signee : null,
            due_date: dueDate ? dueDate : null
        }

        const itemData = []
        invoiceItems.map(item => {
            const { id, price, amount, ...others } = item
            itemData.push(others)
        })

        const formData = new FormData()
        formData.append('sign_img', signature)
        formData.append('item', JSON.stringify(itemData))
        formData.append('invoice', JSON.stringify(invoiceOrg))
        console.log([...formData], 'HDVSHBHJBS');
        dispatch(createInvoiceRequest(formData))
    }

    const handleFileChange = (e) => {
        const files = e.target.files[0]
        if (files) {
            setSignature(files)
        }
    }

    const handleCustomerChange = (id) => {
        setcustomerId(parseInt(id))
        setInvoiceTo(invoiceDetails?.invoice_to?.find(item => item.id == id))
    }

    const handlePreview = () => {
        const previewData = {
            invoice_number: invoiceDetails?.invoice_no,
            invoice_from: invoiceFrom.address,
            invoice_to: invoiceTo?.address + " " + invoiceTo?.city + " " + invoiceTo?.country,
            po_number: poNumber,
            created_date: todayDate,
            due_date: dueDate,
            sign_img: signature ? URL.createObjectURL(signature) : null,
            name_of_signee: signee,
            organization_name: invoiceTo?.name,
            total_amount: totalAmount,
            status: 'Draft',
            items: invoiceItems
        }
        setPreviewData(previewData)
        setOpen(true)
    }

    return (
        <div>
            <div className={styles.invoice_page_Btn}>
                <div className={styles.rightButtonContainer}>
                    <Link className={styles.linkText} href={'/dashboard/admin/finances'}><div className={styles.backtoCircle} />Back to Invoice List</Link>
                    <Button variant='primary' onClick={() => handlePreview()} className={styles.linkText} sx={{ textTransform: 'capitalize' }}>Preview</Button>
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
                                value={customerId}
                                onChange={(e) => handleCustomerChange(e.target.value)}
                                required
                            >
                                {
                                    invoiceDetails?.invoice_to?.map(({ id, name }, i) => <MenuItem key={i} value={id}>{name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <Box sx={{ marginTop: 2 }}>
                            <p style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '10px' }}>PO Number</p>
                            <TextField
                                sx={{ width: '100%' }}
                                focused
                                required
                                size='small'
                                type='number'
                                placeholder='Enter Reference Number'
                                variant="outlined"
                                onChange={(e) => setPoNumber(parseInt(e.target.value))}
                            />
                        </Box>
                    </div>
                    <div>
                        <p style={{ fontWeight: '700', fontSize: '1rem' }}>Invoice details</p>
                        <div className={styles.invoice_details_right}>
                            <Box sx={{ borderBottom: '1px solid #dcdada' }} className={styles.invoice_details_right_div}>
                                <p style={{ fontSize: '1rem', fontWeight: '700' }}>Invoice No <span style={{ color: '#4e6ce0' }}>{invoiceDetails?.invoice_no}</span></p>
                            </Box>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                <Box sx={{ borderRight: '1px solid #dcdada' }} className={styles.invoice_details_right_div}>
                                    <p style={{ fontSize: '1rem', fontWeight: '700' }}>Date <span style={{ color: '#4e6ce0' }}>
                                        {todayDate}
                                    </span></p>
                                </Box>
                                <Box className={styles.invoice_details_right_div}>
                                    <p style={{ fontSize: '1rem', fontWeight: '700' }}>Due Date <span style={{ color: '#4e6ce0', cursor: "pointer" }}>
                                        <TextField
                                            type='date'
                                            focused
                                            sx={{ marginTop: 1 }}
                                            size='small'
                                            onChange={(e) => setDueDate(e.target.value)}
                                        />
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
                            <p>{invoiceFrom.mobile_no}</p>
                            <p>{invoiceFrom.address}</p>
                            <p>{invoiceFrom.zip_code}</p>
                        </Box>
                    </div>
                    <div>
                        <p className={styles.from_toText}>Invoice To</p>
                        {
                            invoiceTo && <Box sx={{ marginTop: 1 }} className={styles.address}>
                                <p>{invoiceTo?.name}</p>
                                <p>{invoiceTo?.address}</p>
                                <p>{invoiceTo?.city + " " + invoiceTo?.country}</p>
                            </Box>
                        }
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
                                size='small'
                                required
                                variant="outlined"
                                name='terms'
                                placeholder='Add Terms & Conditions'
                            />
                            <TextField
                                sx={{ width: '100%', marginTop: 1 }}
                                focused
                                size='small'
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
                                <p style={{ fontSize: '1rem', fontWeight: '700' }}>${taxableValue}</p>
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
                                size='small'
                                onChange={(e) => setSignee(e.target.value)}
                                placeholder='Name Of Signatory'
                            />
                            <Button disabled={createInvoiceState.isLoading} variant='contained' size='large' sx={{ marginTop: 1, background: '#4c6ae3' }} type='submit'>{createInvoiceState.isLoading ? 'Please wait..' : 'Save Invoice'}</Button>
                        </Box>
                    </div>
                </div>
            </form>
            {open && <PreviewInvoiceModal open={open} setOpen={setOpen} >
                <InvoiceView data={previewData} />
            </PreviewInvoiceModal>}
        </div>
    )
}

export default AdminNewInvoiceContent
