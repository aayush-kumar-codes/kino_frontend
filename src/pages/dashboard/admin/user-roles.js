import { Layout } from 'antd';
import React from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminUserRolesContent from '@/Component/admin/RightNavContent/user-roles/AdminUserRolesContent';

const UserRoles = () => {

    return (
        <Layout style={{ minHeight: '100vh', maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText='Term System' />
                <RightContentWrapper padding='14px'>
                    <AdminUserRolesContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default UserRoles;