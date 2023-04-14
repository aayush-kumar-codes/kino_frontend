import React from 'react'
import styles from '@/styles/adminSchoolByCountry.module.css'
import Link from 'next/link'

function CountrySchoolCard({ link, count, country }) {
    return (
        <Link className={styles.countryCard} href={`/dashboard/admin/school-by-country/${country}`}>
            <div>
                <img src={link} alt="flag_icon" className={styles.flagImage} />
            </div>
            <div>
                <p style={{ fontSize: "1.5rem", fontWeight: '800' }}>{count}</p>
                <p style={{ fontWeight: '500' }}>Total Schools in {country}</p>
            </div>
        </Link>
    )
}

export default CountrySchoolCard