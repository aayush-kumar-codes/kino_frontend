import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from '@/styles/adminUserRoles.module.css'
import { Avatar, Tabs } from 'antd'
import { AiOutlineUser } from 'react-icons/ai'
import AdministratorsTable from '../Table/AdministratorsTable'
import AddAdminModal from '../Modal/AddAdminModal'

function AdminUserRolesContent() {

    const [isModal, setIsModal] = useState(false)

    return (
        <div>
            {
                isModal && <AddAdminModal setIsModal={setIsModal} isModal={isModal} />
            }
            <div className={styles.role_btn}>
                <p className={styles.adminText}>Administrators</p>
                <Button variant='contained' size='large' onClick={() => setIsModal(true)}>Add Admin</Button>
            </div>
            <div className={styles.accounts_div}>
                <p className={styles.adminText} style={{ opacity: 0.9 }}>Administrator roles available</p>
                <p className={styles.cardDes}>A role provides access to predefined menus and features so that depending on the assigned role (Super Admin,
                    Content Creator, Findance and Head of Curriculum) an administrator can have access to what he needs. Learn more</p>
                <div className={styles.cardContainer}>

                    <div className={styles.card} style={{ background: '#4EAF96' }}>
                        <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap', gap: '5px' }}>
                            <p>2 ACCOUNTS</p>
                            <div>
                                <Avatar size="small" icon={<AiOutlineUser />} />
                                <Avatar size="small" icon={<AiOutlineUser />} />
                            </div>
                        </div>
                        <p style={{ marginTop: "1rem", fontWeight: '700', fontSize: '1rem' }}>Super Admin</p>
                        <p style={{ marginTop: "1rem" }}>Learn more</p>
                    </div>

                    <div className={styles.card} style={{ background: '#3A93D6' }}>
                        <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap', gap: '5px' }}>
                            <p>1 ACCOUNTS</p>
                            <div>
                                <Avatar size="small" icon={<AiOutlineUser />} />
                            </div>
                        </div>
                        <p style={{ marginTop: "1rem", fontWeight: '700', fontSize: '1rem' }}>Head of Curicullum</p>
                        <p style={{ marginTop: "1rem" }}>Learn more</p>
                    </div>

                    <div className={styles.card} style={{ background: '#9E4EE0' }}>
                        <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap', gap: '5px' }}>
                            <p>4 ACCOUNTS</p>
                            <dir>
                                <Avatar size="small" icon={<AiOutlineUser />} />
                                <Avatar size="small" icon={<AiOutlineUser />} />
                                <Avatar size="small" icon={<AiOutlineUser />} />
                                <Avatar size="small" icon={<AiOutlineUser />} />
                            </dir>
                        </div>
                        <p style={{ marginTop: "1rem", fontWeight: '700', fontSize: '1rem' }}>Content Creator</p>
                        <p style={{ marginTop: "1rem" }}>Learn more</p>
                    </div>
                    <div className={styles.card} style={{ background: '#EA8858' }}>
                        <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap', gap: '5px' }}>
                            <p>1 ACCOUNT</p>
                            <div>
                                <Avatar size="small" icon={<AiOutlineUser />} />
                            </div>
                        </div>
                        <p style={{ marginTop: "1rem", fontWeight: '700', fontSize: '1rem' }}>Finance</p>
                        <p style={{ marginTop: "1rem" }}>Learn more</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '2rem', paddingLeft: "1rem" }}>
                <p className={styles.adminText}>Administrator accounts</p>
                <p className={styles.associateText}>Find all of your company's administrator accounts and their associated roles.</p>
                <Tabs
                    defaultActiveKey="1"
                    style={{ marginTop: "2rem" }}
                    items={[
                        {
                            label: 'All (16)',
                            key: '1',
                            children: <AdministratorsTable />,
                        },
                        {
                            label: 'Super Admin (2)',
                            key: '2',
                            children: <AdministratorsTable />,
                        },
                        {
                            label: 'Head of Curicullum (1)',
                            key: '3',
                            children: <AdministratorsTable />,
                        },
                        {
                            label: 'Content Creator (4)',
                            key: '4',
                            children: <AdministratorsTable />,
                        },
                        {
                            label: 'Finance(1)',
                            key: '5',
                            children: <AdministratorsTable />,
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default AdminUserRolesContent