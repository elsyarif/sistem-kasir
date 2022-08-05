import axios from "axios";

axios.defaults.withCredentials = true
const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
    }
});

API.interceptors.request.use((req) =>{
    if (localStorage.getItem('gxg-hasn')){
        req.headers.Authorization = `Bearer ${localStorage.getItem('gxg-hasn')}`
        req.headers['x-refresh-token'] = localStorage.getItem('gxg-hasn')
    }
    return req
})

API.interceptors.response.use((res) => {
    return res
}, async(error) => {
    const originalConfig = error.config
    if(originalConfig.url !== '/v1/auth/login' && error.response){
        // accessToken expired
        if(error.response.status === 401 && !originalConfig._retry){
            originalConfig._retry = true;
            try {
                const rs = await API.post('/v1/auth/refresh-token')
                const {access_token} = rs.data.data
                localStorage.setItem('gxg-hasn', access_token)

                return API(originalConfig)
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }
    return Promise.reject(error)
})

export default API