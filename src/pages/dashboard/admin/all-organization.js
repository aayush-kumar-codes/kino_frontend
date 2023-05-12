import { Layout } from 'antd';
import React, { useState } from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminAllOrganizationsContent from '@/Component/admin/RightNavContent/orgnizations/AdminAllOrganizationsContent';

const AllOrganization = () => {

    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav collapsed={collapsed} />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} headerText='Total Organizations' />
                <RightContentWrapper padding='12px'>
                    <AdminAllOrganizationsContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AllOrganization;