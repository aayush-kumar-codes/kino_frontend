import { combineReducers } from "@reduxjs/toolkit";
import login from "./slices/login";
import requestAccess from "./slices/requestAccess";
import resetPassword from "./slices/resetPassword";
import createSchool from "./slices/admin/createSchool";
import getAllSchools from "./slices/admin/getAllSchools";
import createTermSystem from "./slices/admin/createTermSystem";
import getLessons from "./slices/admin/getLessons";
import createLesson from "./slices/admin/createLesson";
import getSingleLesson from "./slices/admin/getSingleLesson";
import editSingleLessons from "./slices/admin/editSingleLessons";
import addNewUser from "./slices/admin/addNewUser";
import deleteUser from "./slices/admin/deleteUser";
import getAllUsers from "./slices/admin/getAllUsers"

const rootReducer = combineReducers({
    login: login,
    requestAccess: requestAccess,
    resetPassword: resetPassword,
    createSchool: createSchool,
    getAllSchools: getAllSchools,
    createTermSystem: createTermSystem,
    getLessons: getLessons,
    createLesson: createLesson,
    getSingleLesson: getSingleLesson,
    editSingleLessons: editSingleLessons,
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    getAllUsers: getAllUsers
})
export default rootReducer