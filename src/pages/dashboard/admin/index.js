import { Layout } from 'antd';
import React, { useState } from 'react';
import AdminDashboardContent from '@/Component/admin/AdminDashboardContent';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';

const AdminDashboard = () => {

    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout style={{ minHeight: "100vh" }}>
            <AdminLeftNav collapsed={collapsed} />
            <Layout className="site-layout">
                <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} headerText="Dashboard" />
                <RightContentWrapper>
                    <AdminDashboardContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AdminDashboard;