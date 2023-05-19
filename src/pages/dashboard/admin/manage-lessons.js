import React, { useEffect } from 'react';
import AdminManageLessionsContent from '@/Component/admin/RightNavContent/lessons/AdminManageLessionsContent';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const ManageLessons = () => {

    useEffect(() => {
        dispatch(setHeader('School'))
    }, [])

    return (
        <AdminManageLessionsContent />
    );
};
export default ManageLessons;