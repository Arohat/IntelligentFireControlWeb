import axios from 'axios'
import qs from 'qs'
import {Message, Loading} from 'element-ui'
const baseURL ='http://192.168.0.111:8081/ifc';
const http = axios.create({
  baseURL
})

let loadinginstace;
http.interceptors.request.use(config => {
  loadinginstace = Loading.service({fullscreen: true,background:'#00000000'});
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, error => {
  loadinginstace.close();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error)
});
http.interceptors.response.use(data => {
  loadinginstace.close();
  // if(data.data.code!=0&&data.data.message){
  //   Message.error({
  //     message: data.data.message
  //   });
  // }

  return data.data
}, error => {
  console.log("data","data")
  loadinginstace.close();
  Message.error({
    message: '加载失败'
  });
  return Promise.reject(error)
});
export default http;
