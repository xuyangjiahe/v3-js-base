import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routePath.js'
// import store from '@/store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // try {
  //   const { userInfo } = store.state
  //   if (userInfo) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // } catch (err) {
  //   next('/404')
  //   throw new Error(err)
  // }
  next()
})

export default router
