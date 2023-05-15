import { Layout } from 'antd';
import React from 'react';
import AdminDashboardContent from '@/Component/admin/RightNavContent/dashboard-home/AdminDashboardContent';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';

const AdminDashboard = () => {

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText="Dashboard" />
                <RightContentWrapper>
                    <AdminDashboardContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AdminDashboard;