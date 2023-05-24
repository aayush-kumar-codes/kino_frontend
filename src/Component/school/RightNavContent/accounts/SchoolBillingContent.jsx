import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useCallback } from 'react'
import { BsArrowCounterclockwise, BsWallet2 } from 'react-icons/bs'

const SchoolBillingContent = ({ data }) => {
    const router = useRouter()

    const getBenefits = useCallback((benefitsData) => {
        const nameList = benefitsData.map(item => item.name);
        const joinedNames = nameList.join(", ");
        return joinedNames + " "
    }, [data])

    return (
        <Box sx={{ marginTop: "2rem", display: 'grid', gridTemplateColumns: "1fr 1fr", columnGap: "2rem" }}>
            <Box>
                <Box sx={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <BsWallet2 size={'1.5rem'} />
                    <Typography sx={{ fontWeight: "700" }} variant='h5'>
                        Current Subscription
                    </Typography>
                </Box>
                <hr />
                <Box
                    sx=
                    {{
                        background: '#fff',
                        color: '#1C3050',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '2px solid #efefef',
                        minHeight: '350px',
                        marginTop: '1.5rem'
                    }}
                >
                    <Box sx={{ minHeight: '70px' }}>
                        <Typography sx={{ fontWeight: '700' }} variant='h6'>
                            Your Plan
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: '1.2rem' }}>
                            {data?.plan_name || ''} Annual Member
                        </Typography>
                        <Typography sx={{ color: "#48C1C1" }} variant='h6'>
                            ${data?.price || 0}/Year
                        </Typography>
                        <Typography variant='body1'>
                            About {data?.plan_name || ''}. Members receive benefits which
                            include {getBenefits(data?.benefits || [])}
                            and more.
                        </Typography>
                        <Button variant='contained' size='large' sx={{ width: 'fit-content' }} onClick={() => router.push('/dashboard/school/accounts')}>
                            See Plan
                        </Button>
                    </Box>
                    <Box sx={{ marginTop: '2rem' }}>
                        <Typography>
                            Learn more about <span style={{ color: '#48c1c1' }}>our subscription plan options.</span>
                        </Typography>
                    </Box>
                </Box>
            </Box>


            <Box>
                <Box sx={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <BsArrowCounterclockwise size={'1.5rem'} />
                    <Typography sx={{ fontWeight: "700" }} variant='h5'>
                        Billing Cycle
                    </Typography>
                </Box>
                <hr />
                <Box
                    sx=
                    {{
                        background: '#fff',
                        color: '#1C3050',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '2px solid #efefef',
                        minHeight: '350px',
                        marginTop: '1.5rem'
                    }}
                >
                    <Box sx={{ minHeight: '70px' }}>
                        <Typography sx={{ fontWeight: '700' }} variant='h6'>
                            Yearly Subscription
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Typography>
                            Next payment:
                        </Typography>
                        <Typography sx={{ fontWeight: '500', fontSize: '1.2rem' }}>
                            {data?.plan_name || ''} Annual Member
                        </Typography>
                        <Typography sx={{ color: "#48C1C1" }} variant='h6'>
                            ${data?.price || 0}/Year
                        </Typography>
                        <Typography>
                            On {data?.end_date}
                        </Typography>
                        <Typography variant='body2'>
                            Last payment made: {data?.start_date}
                        </Typography>
                        <Button variant='contained' size='large' sx={{ width: 'fit-content' }}>
                            Switch Billing Cycle
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box >
    )
}

export default SchoolBillingContent
