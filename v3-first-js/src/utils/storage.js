import { validatenull } from './util'
/**
 * 存储localStorage
 * @params {String} name This name of key's
 * @params {Array|Object|Boolean|Function} contnet 内容
 * @params {Boolean} type true or false to check  sessionStorage or sessionStorage
 */
export const setStore = (params) => {
  const {
    name,
    content,
    type,
    datetime
  } = params
  const obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    datetime: new Date().getTime() + datetime
  }
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}

/**
 * 获取localStorage
 */
export const getStore = (params) => {
  const {
    name
    // type
  } = params
  let obj = {}
  let content
  obj = window.localStorage.getItem(name)
  if (validatenull(obj)) obj = window.sessionStorage.getItem(name)
  if (validatenull(obj)) return
  obj = JSON.parse(obj)
  if (obj['dataType'] === 'string') {
    content = obj['content']
  } else if (obj['dataType'] === 'number') {
    content = Number(obj['content'])
  } else if (obj['dataType'] === 'boolean') {
    content = Boolean(obj['content'])
  } else if (obj['dataType'] === 'object') {
    content = obj['content']
  }
  return content
}
/**
 * 删除localStorage
 */
export const removeStore = params => {
  const {
    name
  } = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}
