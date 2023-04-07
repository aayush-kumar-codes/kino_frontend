import React from 'react'
import styles from '@/styles/adminDashboardContent.module.css'

function AdminDashboardContent() {
  return (
    <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
      <div>
        <div className={styles.card}>card 1</div>
        <div className={styles.card} style={{ background: "#C6164F" }}>card 2</div>
        <div className={styles.card} style={{ height: '300px', background: '#6759D1' }}>card 3</div>

      </div>
      <div>
        <div className={styles.card} style={{ background: "#EA8858" }}>card 1</div>
        <div className={styles.card} style={{ background: "#4EAF96" }}>card 2</div>
        <div className={styles.card} style={{ height: '300px', background: '#2896A0' }}>card 3</div>
      </div>
      <div className={styles.card} style={{ height: '550px', marginLeft: "1rem" ,background:"#fff"}}>card left</div>
    </div>
  )
}

export default AdminDashboardContent
