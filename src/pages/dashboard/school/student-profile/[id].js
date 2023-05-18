import { Layout } from 'antd';
import React from 'react';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import StudentProfileContent from '@/Component/admin/RightNavContent/students/StudentProfileContent';
import { useRouter } from 'next/router';
import SchoolLeftNav from '@/Component/Generic/LeftNavbar/SchoolLeftNav';
import SchoolHeader from '@/Component/Generic/Header/SchoolHeader';

const StudentProfile = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <SchoolHeader headerText="Student" />
                <RightContentWrapper>
                    <StudentProfileContent id={id} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default StudentProfile;