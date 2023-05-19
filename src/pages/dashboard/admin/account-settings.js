import { Layout } from 'antd';
import React from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminAccountSettingsContent from '@/Component/admin/RightNavContent/settings/AdminAccountSettingsContent';

const AccountSettings = () => {

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText='School' />
                <RightContentWrapper padding='18px'>
                    <AdminAccountSettingsContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AccountSettings;