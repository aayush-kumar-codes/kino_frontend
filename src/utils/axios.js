import axios from "axios";
import { baseUrl } from "./constant";

const Axios = axios.create({
    baseURL: baseUrl
})

Axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response && error.response.data)
            return Promise.reject(error.response.data)
        else return Promise.reject({ msg: "Something went wrong" })
    }
)
export default Axios