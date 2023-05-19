import { Layout } from 'antd';
import React from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminCreateSchoolContent from '@/Component/admin/RightNavContent/schools/AdminCreateSchoolContent';

const CreateSchool = () => {

    return (
        <Layout style={{ maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText='School' />
                <RightContentWrapper padding='12px'>
                    <AdminCreateSchoolContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};

export default CreateSchool;