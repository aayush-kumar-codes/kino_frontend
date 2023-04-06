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
        if (error.response.status === 401) {
            localStorage.clear()
            window.location.href('/')
        }
        else if (error.response && error.response.data)
            return Promise.reject(error.response.data)
        else return Promise.reject({ message: "Something went wrong" })
    }
)
export default Axios