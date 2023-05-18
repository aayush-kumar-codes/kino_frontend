import { Layout } from 'antd';
import React from 'react';
import SchoolLeftNav from '@/Component/Generic/LeftNavbar/SchoolLeftNav';
import SchoolHeader from '@/Component/Generic/Header/SchoolHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import { useRouter } from 'next/router';
import SchoolAllParents from '@/Component/school/RightNavContent/parents/SchoolAllParents';

const AllParents = () => {
    const router = useRouter()
    const { Class } = router.query

    return (
        <Layout style={{ minHeight: '100vh', maxHeight: "100vh", overflow: "hidden" }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <SchoolHeader headerText='Parents' />
                <RightContentWrapper padding='14px'>
                    <SchoolAllParents Class={Class} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default AllParents;