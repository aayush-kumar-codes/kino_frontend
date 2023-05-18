import { Layout } from 'antd';
import React from 'react';
import SchoolLeftNav from '@/Component/Generic/LeftNavbar/SchoolLeftNav';
import SchoolHeader from '@/Component/Generic/Header/SchoolHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import TeacherProfileContent from '@/Component/admin/RightNavContent/teachers/TeacherProfileContent';
import { useRouter } from 'next/router';

const TeacherProfile = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <SchoolHeader headerText="" />
                <RightContentWrapper>
                    <TeacherProfileContent id={id} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default TeacherProfile;