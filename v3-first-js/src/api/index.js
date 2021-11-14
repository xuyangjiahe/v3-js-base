import myInterface from './http'

export const httpServe = ({ url, data, methods }) => {
  return myInterface({
    url: '',
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    data: data
  })
}

export const httpServeNew = (resoce) => {
  console.log('resoce :', resoce)
  const params = {}
  if (resoce.method.toUpperCase() === 'GET' || resoce.method.toUpperCase() === 'DELETE') {
    params['params'] = resoce.data
  } else {
    params['data'] = resoce.data
  }
  const url = resoce.url
  return myInterface(url, {
    method: resoce.method && resoce.method.toUpperCase(),
    ...params
  }).then(res => {
    console.log('res:', res)
    return Promise.resolve(res)
  }).catch(err => {
    console.log('err:', err)
    return Promise.reject(err)
  })
}
