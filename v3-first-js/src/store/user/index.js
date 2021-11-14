import { setStore, getStore } from '@/utils/storage'

export default {
  state: {
    userInfo: getStore({ name: 'userInfo', type: true }) || {}
    // handleLogOut:
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setStore({
        name: 'userInfo',
        comtent: userInfo,
        type: true
      })
    }
  },
  actions: {
    handleLogOut({ state, commit }) {
      /**
       * 清除登录信息
      */
      console.log('handleLogOut')
      commit('setToken', '')
      commit('setAccess', '')
      localStorage.clear()
    },
    async getUserInfo({ state, commit }) {
      try {
        // 假设 获取用户接口为getUserInfoServe
        // const res = await getUserInfoServe()
        // commit('setAccess', res.data)
        // return {
        //   access: res.data
        // }
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
