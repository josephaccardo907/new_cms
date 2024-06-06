import axios from "axios";

const BASE_URL = 'http://localhost:3000/v1';

const api = axios.create({
    baseURL: BASE_URL
})

api.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.error('Response error:', error);
        return Promise.reject(error);
    }
)

export default api;