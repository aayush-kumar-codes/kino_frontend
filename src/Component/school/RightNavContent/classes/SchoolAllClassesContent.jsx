import React from 'react'
import styles from '@/styles/classes.module.css'
import ClassesCard from '@/Component/Generic/ClassesCard'

const SchoolAllClassesContent = () => {
    return (
        <div className={styles.classes_card_container}>
            <ClassesCard />
            <ClassesCard />
            <ClassesCard />
        </div>
    )
}

export default SchoolAllClassesContent
