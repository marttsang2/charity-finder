import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://partners.every.org/v0.2',
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.defaults.params = {}
axiosInstance.defaults.params['apiKey'] = 'pk_live_8bf16c8398868bfa90c40789af53a851'

export default axiosInstance;