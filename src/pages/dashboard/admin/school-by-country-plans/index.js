import { Layout } from 'antd';
import React from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import { useRouter } from 'next/router';
import AdminPlansCountrySchoolContent from '@/Component/admin/RightNavContent/schools/AdminPlansCountrySchoolContent';

const SchoolByCountry = () => {
    const router = useRouter()
    const { country, plans } = router.query

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText='Total Schools' />
                <RightContentWrapper padding='12px'>
                    <AdminPlansCountrySchoolContent country={country} plans={plans} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default SchoolByCountry;