
export const statusRes = (status) => {
  switch (status) {
    case 400:
      console.log('错误请求')
      break
    case 401:
      // 无权限，重定向
      console.log('未授权，请重新登录')
      break
    case 403:
      console.log('拒绝访问')
      break
    case 404:
      console.log('请求错误，未找到该资源')
      break
    case 408:
      console.log('请求超时')
      break
    case 500:
      console.log('服务器端出错')
      break
    case 501:
      console.log('网络未实现')
      break
    case 502:
      console.log('网络错误')
      break
    case 503:
      console.log('服务不可用')
      break
    case 504:
      console.log('网络超时')
      break
    case 505:
      console.log('http版本不支持该请求')
      break
  }
}
