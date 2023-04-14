import { combineReducers } from "@reduxjs/toolkit";
import login from "./slices/login";
import requestAccess from "./slices/requestAccess";
import resetPassword from "./slices/resetPassword";
import createSchool from "./slices/admin/createSchool";
import getAllSchools from "./slices/admin/getAllSchools";
import createTermSystem from "./slices/admin/createTermSystem";

const rootReducer = combineReducers({
    login: login,
    requestAccess: requestAccess,
    resetPassword: resetPassword,
    createSchool: createSchool,
    getAllSchools: getAllSchools,
    createTermSystem: createTermSystem
})
export default rootReducer