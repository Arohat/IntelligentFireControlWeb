import axios from 'axios' 
import qs from 'qs'
import http from './http'
const http_noLoading = axios.create({
  baseURL:http.defaults.baseURL
})

http_noLoading.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, error => {
  return Promise.reject(error)
});
http_noLoading.interceptors.response.use(data => {
  return data.data
}, error => {
  return Promise.reject(error)
});
export default http_noLoading;
