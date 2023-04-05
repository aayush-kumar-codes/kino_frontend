import { combineReducers } from "@reduxjs/toolkit";
import login from "./slices/login";
import requestAccess from "./slices/requestAccess";

const rootReducer = combineReducers({
    login: login,
    requestAccess: requestAccess
})
export default rootReducer