import { Layout } from 'antd';
import React from 'react';
import SchoolLeftNav from '@/Component/Generic/LeftNavbar/SchoolLeftNav';
import SchoolHeader from '@/Component/Generic/Header/SchoolHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import SchoolAllStudentsContent from '@/Component/school/RightNavContent/students/SchoolAllStudentsContent';
import { useRouter } from 'next/router';

const AllStudents = () => {
    const router = useRouter()
    const { Class } = router.query

    return (
        <Layout style={{ minHeight: '100vh', maxHeight: "100vh", overflow: "hidden" }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <SchoolHeader headerText='Students' />
                <RightContentWrapper padding='14px'>
                    <SchoolAllStudentsContent Class={Class} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AllStudents;