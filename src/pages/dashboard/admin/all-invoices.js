import { Layout } from 'antd';
import React from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminAllInvoicesContent from '@/Component/admin/RightNavContent/finance/AdminAllInvoicesContent';

const AllInvoice = () => {

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText='Finances' />
                <RightContentWrapper padding='12px'>
                    <AdminAllInvoicesContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AllInvoice;