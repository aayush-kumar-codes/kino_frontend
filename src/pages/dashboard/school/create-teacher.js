import { Layout } from 'antd';
import React from 'react';
import SchoolLeftNav from '@/Component/Generic/LeftNavbar/SchoolLeftNav';
import SchoolHeader from '@/Component/Generic/Header/SchoolHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import SchoolCreateTeacherContent from '@/Component/school/RightNavContent/teachers/SchoolCreateTeacherContent';

const CreateTeacher = () => {

    return (
        <Layout style={{ minHeight: '100vh', maxHeight: "100vh", overflow: "hidden" }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <SchoolHeader headerText='Create Teacher' />
                <RightContentWrapper padding='14px'>
                    <SchoolCreateTeacherContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default CreateTeacher;