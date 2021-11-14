/**
 * 路由配置
 * @ params isKeepAlive 是否需要缓存
 * @ params hasAuth 是否有权限
*/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
      isKeepAlive: false,
      hasAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于',
      isKeepAlive: true,
      hasAuth: true
    }
  }
]

export default routes
