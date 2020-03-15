import axios from 'axios'

// config:配置参数，successCallback:成功的回调函数，failureCallback：失败的回调函数
export function ajaxRequest(config) {

  // 公共参数
  const axiosExample = axios.create({
    // baseURL: 'http://localhost',
    baseURL: 'http://hnguzx1.utools.club',
    timeout: 5000,
    // headers: {'content-type': 'application/x-www-form-urlencoded'},
    responseType: 'json'
  });
  // request拦截
  axiosExample.interceptors.request.use(config => {
    return config
  }, error => {
  });
  // response拦截
  axiosExample.interceptors.response.use(res => {
    console.log(res.data);
    return res.data
  }, error => {
  });

  return axiosExample(config)
}
