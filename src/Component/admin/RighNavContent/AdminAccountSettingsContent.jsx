import React from 'react'
import styles from '@/styles/adminSettingContent.module.css'
import { Switch } from 'antd'
import { Button } from '@mui/material'
import ActivityLogTable from '../Table/ActivityLogTable'

function AdminAccountSettingsContent() {
    return (
        <div style={{ padding: "0 2rem" }}>
            <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>Account Setting</p>
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>Security Setting</p>
            <hr />
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.activityContainer}>
                        <p className={styles.activityText}>Activity Logs</p>
                        <Switch defaultChecked style={{ borderRadius: '4px' }} />
                    </div>
                    <p style={{ fontSize: "1rem" }}>You can save your all activity logs including unusual activity detected.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.activityContainer}>
                        <p className={styles.activityText}>Change Password</p>
                        <Button variant='contained' size='large' sx={{ background: "#25B5B5", color: "#fff", border: 'none', fontSize: "12x" }}>Change Password</Button>
                    </div>
                    <p style={{ fontSize: "1rem" }}>Set a unique password to protect your account.</p>
                </div>
            </div>
            <div className={styles.card} style={{ width: "100%", marginTop: '2rem' }}>
                <div className={styles.activityContainer}>
                    <p className={styles.activityText}>2 Step Verification</p>
                    <Button variant='contained' size='large' sx={{ background: "#FF2829", color: "#fff", border: 'none' }}>Enabled</Button>
                </div>
                <p style={{ fontSize: "1rem" }}>Secure your account with 2 Step security. When it is activated you will need to enter not only your password, but also a special code using app. You can</p>
            </div>
            <p style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Activity Log</p>

            <ActivityLogTable />
        </div>
    )
}

export default AdminAccountSettingsContent