

export const getLocalCacheByKey = (key) => {
  const data = localStorage.getItem(key)
  return data
}

export const setLocalCacheByKey = (key, data) =>{
  if (typeof (data) === 'object') {
    localStorage.setItem(key, JSON.stringify(data))
  } else {
    localStorage.setItem(key, data)
  }
}
export const removeLocalCahceByKey = (key) => {
  localStorage.removeItem(key)
}
export const ClearLocalCache = () => {
  localStorage.clear()
}

export const getSessionCacheByKey = (key) => {
  const data = sessionStorage.getItem(key)
  return data
}
export const  setSessionCacheByKey = (key, data) => {
  if (typeof (data) === 'object') {
    sessionStorage.setItem(key, JSON.stringify(data))
  } else {
    sessionStorage.setItem(key, data)
  }
}
export const removeSessionCahceByKey = (key) => {
  sessionStorage.removeItem(key)
}
export const clearSessionCache = () => {
  sessionStorage.clear()
}
export const setCookie = (c_name, value, expiredays) => {
  /**
   * @param c_name  名称
   * @param value  值
   * @param expiredays  失效天数
  */
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString() + ';path=/')
}
export const getCookie = (name) => {
    var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr = document.cookie.match(reg)) { return (arr[2]) } else { return null }
}
export const delAllCookie = () => {
  let date = new Date()
  date.setTime(date.getTime() - 10000)
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g)
  if (keys) {
    for (let i = keys.length; i--;) document.cookie = keys[i] + '=0; expire=' + date.toGMTString() + '; path=/'
  }
}
export const delCookie = (name) => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() }
}

