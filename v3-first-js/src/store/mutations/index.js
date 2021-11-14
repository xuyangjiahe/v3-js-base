import { setStore } from '@/utils/storage'
const mutations = {
  setText(state, obj) {
    console.log('obj:', obj)
    state.obj = obj
  },
  setTestStorage(state, testStorage) {
    state.testStorage = testStorage
    setStore({
      name: 'testStorage',
      content: testStorage,
      type: ''
    })
  }
}

export default mutations
