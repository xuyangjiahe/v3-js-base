import { getStore } from '@/utils/storage'
const state = {
  testStorage: getStore({ name: 'testStorage' }) || {}
}

export default state
