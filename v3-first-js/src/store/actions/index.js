const actions = {
  setText(context) {
    context.commit('setText')
  },
  setTestStorage({ state, commit }, param) {
    console.log(param)
    commit('setTestStorage', param)
  }
}

export default actions
