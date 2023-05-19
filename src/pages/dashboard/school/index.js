import { Layout } from 'antd';
import React from 'react';
import SchoolLeftNav from '@/Component/Generic/LeftNavbar/SchoolLeftNav';
import SchoolHeader from '@/Component/Generic/Header/SchoolHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import SchoolDashboardContent from '@/Component/school/RightNavContent/dashboard-home/SchoolDashboardContent';

const SchoolHome = () => {

    return (
        <Layout style={{ minHeight: '100vh', maxHeight: "100vh", overflow: "hidden" }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <SchoolHeader headerText='Dashboard' />
                <RightContentWrapper padding='14px'>
                    <SchoolDashboardContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default SchoolHome;