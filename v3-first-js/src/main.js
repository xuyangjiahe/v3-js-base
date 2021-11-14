import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { httpServeNew } from './api/index'

const app = createApp(App)
app.config.globalProperties.$httpServeNew = httpServeNew
app.use(store).use(router).mount('#app')
