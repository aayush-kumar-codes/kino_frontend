import React, { useEffect } from 'react';
import AdminLessionFormContent from '@/Component/admin/RightNavContent/lessons/AdminLessionFormContent';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const AddLesson = () => {

    useEffect(() => {
        dispatch(setHeader('Add Lesson'))
    }, [])

    return (
        <AdminLessionFormContent />
    );
};
export default AddLesson;