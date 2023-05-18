import { Layout } from 'antd';
import React from 'react';
import SchoolLeftNav from '@/Component/Generic/LeftNavbar/SchoolLeftNav';
import SchoolHeader from '@/Component/Generic/Header/SchoolHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import SchoolAllTeachers from '@/Component/school/RightNavContent/teachers/SchoolAllTeachers';

const AllTeachers = () => {

    return (
        <Layout style={{ minHeight: '100vh', maxHeight: "100vh", overflow: "hidden" }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <SchoolHeader headerText='Teachers' />
                <RightContentWrapper padding='14px'>
                    <SchoolAllTeachers/>
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AllTeachers;