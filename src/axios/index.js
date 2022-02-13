import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


api.interceptors.request.use(config =>{
    config.url = config.url + '?api_key='+ '4f6180974989b4115cfd59034eb82ace' + '&language=en-US&page=1'
    return config
})

export default api;