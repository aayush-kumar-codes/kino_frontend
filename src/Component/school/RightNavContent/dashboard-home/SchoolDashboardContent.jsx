import React from 'react'
import styles from '@/styles/adminDashboardContent.module.css'
import CounterCard from '../../../Generic/CounterCard'
import { FaRegBuilding } from 'react-icons/fa'
import { BsTerminal } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io'
import { BiBookOpen } from 'react-icons/bi'
import { Box } from '@mui/material'

const FaRegBuildingIcon = <FaRegBuilding size={'2.6rem'} color='#9E4EE0' />
const BsTerminalIcon = <BsTerminal size={'2.6rem'} color='#EA8858' />
const AiOutlineUserAddIcon = <AiOutlineUserAdd size={'2.6rem'} color='#C6164F' />
const IoIosPeopleIcon = <IoIosPeople size={'2.6rem'} color='#4EAF96' />


function SchoolDashboardContent() {

    return (
        <div>
            <div className={styles.card_container}>
                <div className={styles.card_innerContainer}>
                    <CounterCard
                        to='/dashboard/school/all-schools'
                        color={'#9E4EE0'}
                        icon={FaRegBuildingIcon}
                        totalText={'Schools'}
                        totalNo={0}
                    />
                    <CounterCard
                        to='/dashboard/school/all-students'
                        color={'#C6164F'}
                        icon={AiOutlineUserAddIcon}
                        totalText={'Students'}
                        totalNo={0}
                    />
                    <div className={styles.card_left} style={{ background: '#6759D1' }}>
                        <div style={{ zIndex: 3 }}>
                            <p>Roll Call Summary</p>
                            <p className={styles.cardLeft_textSize} style={{ fontSize: "2rem", fontWeight: '800' }}>{0}/{0}</p>
                        </div>
                        <div style={{ zIndex: 3 }}>
                            <p>Students Present</p>
                            <p className={styles.cardLeft_textSize} style={{ fontSize: "2rem", fontWeight: '800' }}>{0}</p>
                        </div>
                        <div style={{ zIndex: 3 }}>
                            <p>Students Absent</p>
                            <p className={styles.cardLeft_textSize} style={{ fontSize: "2rem", fontWeight: '800' }}>{0}</p>
                        </div>
                        <div className={styles.circleDiv}>
                        </div>
                    </div>

                </div>
                <div className={styles.card_innerContainer}>
                    <CounterCard
                        to='/dashboard/school/all-teachers'
                        color={'#EA8858'}
                        icon={BsTerminalIcon}
                        totalText={'Teachers'}
                        totalNo={0}
                    />
                    <CounterCard
                        to='/dashboard/school/all-parents'
                        color={'#4EAF96'}
                        icon={IoIosPeopleIcon}
                        totalText={'Parents'}
                        totalNo={0}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <CounterCard
                            to='/dashboard/school/all-students'
                            color={'#C6164F'}
                            icon={AiOutlineUserAddIcon}
                            totalText={'Students'}
                            totalNo={0}
                        />
                        <CounterCard
                            to='/dashboard/school/all-parents'
                            color={'#4EAF96'}
                            icon={IoIosPeopleIcon}
                            totalText={'Parents'}
                            totalNo={0}
                        />
                    </Box>
                </div>
                <div className={styles.right_flnCard}>
                    <p className={styles.flnText}>FLN IMPACT</p>
                    <div className={styles.fln_Icon}>
                        <BiBookOpen color='#3D5EE1' size={'3rem'} />
                        <p className={styles.fln_Icon_Number}>{672}</p>
                    </div>
                    <p className={styles.performance_text}>Overall Performance Foundational
                        Learning and Numeracy Impact</p>
                    <table style={{ margin: 'auto', marginTop: "1rem", color: '#cccaca', borderSpacing: '0 0.8rem', textAlign: 'left', padding: "0 1rem" }}>
                        <tbody>
                            <tr style={{ color: '#a24b79' }}>
                                <th>Accessment Area</th>
                                <th>Numbers</th>
                            </tr>
                            <tr >
                                <td style={{ fontWeight: '500' }}>{'accessment_area'}:</td>
                                <td style={{ fontWeight: '500', textAlign: 'center' }}>{25}</td>
                            </tr>
                            <tr >
                                <td style={{ fontWeight: '500' }}>{'accessment_area'}:</td>
                                <td style={{ fontWeight: '500', textAlign: 'center' }}>{25}</td>
                            </tr> <tr >
                                <td style={{ fontWeight: '500' }}>{'accessment_area'}:</td>
                                <td style={{ fontWeight: '500', textAlign: 'center' }}>{25}</td>
                            </tr> <tr >
                                <td style={{ fontWeight: '500' }}>{'accessment_area'}:</td>
                                <td style={{ fontWeight: '500', textAlign: 'center' }}>{25}</td>
                            </tr> <tr >
                                <td style={{ fontWeight: '500' }}>{'accessment_area'}:</td>
                                <td style={{ fontWeight: '500', textAlign: 'center' }}>{25}</td>
                            </tr> <tr >
                                <td style={{ fontWeight: '500' }}>{'accessment_area'}:</td>
                                <td style={{ fontWeight: '500', textAlign: 'center' }}>{25}</td>
                            </tr> <tr >
                                <td style={{ fontWeight: '500' }}>{'accessment_area'}:</td>
                                <td style={{ fontWeight: '500', textAlign: 'center' }}>{25}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
            <div className={styles.copyright}>
                <p>COPYRIGHT &copy; 2023 KAINO.</p>
            </div>
        </div>
    )
}

export default SchoolDashboardContent
