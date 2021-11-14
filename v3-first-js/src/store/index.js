import { createStore } from 'vuex'
import state from './state/index.js'
import mutations from './mutations/index.js'
import actions from './actions/index.js'
import modules from './modules/index.js'
// import getters from './getters/index.js'

export default createStore({
  state,
  mutations,
  actions,
  modules
})
