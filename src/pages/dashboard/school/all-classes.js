import { Layout } from 'antd';
import React from 'react';
import dynamic from 'next/dynamic';

const SchoolAllClassesContent = dynamic(
    () => import('@/Component/school/RightNavContent/classes/SchoolAllClassesContent')
);
const SchoolLeftNav = dynamic(
    () => import('@/Component/Generic/LeftNavbar/SchoolLeftNav')
);
const SchoolHeader = dynamic(
    () => import('@/Component/Generic/Header/SchoolHeader')
);
const RightContentWrapper = dynamic(
    () => import('@/Component/Generic/RightBarContent/RightContentWrapper')
);

const AllClasses = () => {
    return (
        <Layout style={{ minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
            <SchoolLeftNav />
            <Layout className="site-layout" style={{ maxHeight: '100vh', overflow: 'scroll', overflowX: 'hidden' }}>
                <SchoolHeader headerText='Classes' />
                <RightContentWrapper padding='14px'>
                    <SchoolAllClassesContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};

export default AllClasses;
