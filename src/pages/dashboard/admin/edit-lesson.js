import { Layout } from 'antd';
import React from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import { useRouter } from 'next/router';
import AdminEditLessonContent from '@/Component/admin/RightNavContent/lessons/AdminEditLessonContent';

const EditLesson = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader headerText='Total Schools' />
                <RightContentWrapper padding='12px'>
                    <AdminEditLessonContent id={id} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default EditLesson;