import { Layout } from 'antd';
import React from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminStudentByCountryContent from '@/Component/admin/RightNavContent/students/AdminStudentByCountryContent';
import { useRouter } from 'next/router';

const StudentByCountry = () => {
    const router = useRouter()
    const { country } = router.query

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText='Total Students' />
                <RightContentWrapper padding='12px'>
                    <AdminStudentByCountryContent country={country} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default StudentByCountry;