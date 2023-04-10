import React from 'react'
import styles from '@/styles/adminDashboardContent.module.css'

function CounterCard({ color, icon, totalText, totalNo }) {
    return (
        <div className={styles.card} style={{ background: `${color}` }}>
            <div className={styles.icon_Container}>
                {icon}
            </div>
            <div className={styles.totalTextContainer}>
                <p className={styles.totalText}>Total {totalText}</p>
                <p className={styles.totalNumber}>{totalNo}</p>
            </div>
        </div>
    )
}

export default CounterCard