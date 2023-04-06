import { combineReducers } from "@reduxjs/toolkit";
import login from "./slices/login";
import requestAccess from "./slices/requestAccess";
import resetPassword from "./slices/resetPassword";

const rootReducer = combineReducers({
    login: login,
    requestAccess: requestAccess,
    resetPassword: resetPassword
})
export default rootReducer