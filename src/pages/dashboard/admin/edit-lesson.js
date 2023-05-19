import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminEditLessonContent from '@/Component/admin/RightNavContent/lessons/AdminEditLessonContent';
import { setHeader } from '@/redux/slices/HeaderTitle';
import { dispatch } from '@/redux/store';

const EditLesson = () => {
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        dispatch(setHeader('Total Schools'))
    }, [])

    return (
        <AdminEditLessonContent id={id} />
    );
};
export default EditLesson;