import axios from 'axios'
import { statusRes } from './resposeStatus'
// import qs from 'querystring'
/**
 * 1、环境变量配置
 * 2、请求不同方式 大小写 格式化
 * 3、不同请求方式，不同入参风格
 * 4、请求头相关，比如是否需要携带token ；以及不同的请求头
 * 5、容错，响应器中的错误处理
 * 6、结合vuex 响应的存储处理
*/

var myInterface = axios.create({
  baseURL: '',
  timeout: 60 * 1000
})

myInterface.interceptors.request.use(config => {
  console.log('config:', config)
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  // config.headers['Cookie'] = 'this is a text cookie '
  config.headers['Muyuan-Auth'] = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ1c2VyX25hbWUiOiIyMTAxMTY5OTkiLCJkZXB0X25hbWUiOiIiLCJyZWFsX25hbWUiOiLlvKDml63pmLMiLCJhdmF0YXIiOiIiLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJjbGllbnRfaWQiOiJzbGMtY29tcHJlaGVuc2l2ZSIsInJvbGVfbmFtZSI6ImFkbWluIiwibGljZW5zZSI6InBvd2VyZWQgYnkgbXV5dWFudG9vbCIsInBvc3RfaWQiOiIiLCJ1c2VyX2lkIjoiMTM4NjUxODkwNjI1MDY1Nzg0MSIsInBvc3RfbmFtZSI6IiIsInJvbGVfaWQiOiIxMzc0OTgzOTk0OTU0NjY1OTg1Iiwic2NvcGUiOlsiYWxsIl0sIm5pY2tfbmFtZSI6IuW8oOaXremYsyIsIm9hdXRoX2lkIjoiIiwiZGV0YWlsIjp7InR5cGUiOiJ3ZWIiLCJhcHBDb2RlIjoic2xjLWNvbXByZWhlbnNpdmUiLCJkYXRhVHlwZSI6InNsYy1jb21wcmVoZW5zaXZlIn0sImV4cCI6MTYzNjYyMDAxOCwiZGVwdF9pZCI6IiIsImp0aSI6IjJhMzQxMGQwLWNkZjMtNDE2OC1hOWRkLWNlYTY5NmFjNmFhYSIsImFjY291bnQiOiIyMTAxMTY5OTkifQ.OqUTJYWLBnT2exSm_w_dlmc4EBQC1Y_Qu97yE_orrhU'

  // if ((config.method).toUpperCase() === 'GET') {
  //   config.params = qs.stringify(config.data)
  // }
  return config
}, err => {
  return Promise(new Error(err))
})

myInterface.interceptors.response.use(res => {
  console.log('res:', res)
  const status = res.status || res.data.code
  statusRes(status)
  return Promise.resolve(res)
}, err => {
  console.log('err:', err)
  return Promise(new Error(err))
})

export default myInterface
