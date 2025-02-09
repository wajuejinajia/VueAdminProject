import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
import router from './router'
// element-plus 的完整引入，需要考虑最后打包的体积
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus icon的引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入pinia
import { createPinia } from 'pinia'
// 引入mock
import '@/api/mock.js'
// 引入api借口
import api from './api/api'

import { useAllDataStore } from './stores'

function isRouter(to) {
    let res = router.getRoutes()
    let resFil = res.filter((item) => item.path === to.path)
    return resFil.length > 0
}

router.beforeEach((to, from) => {
    if (to.path !== '/login' && !store.state.token) {
        return { name: 'login' }
    }
    if (!isRouter(to)) {
        return { name: '404' }
    }
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
const store = useAllDataStore()

store.addMenu(router, "refresh")
app.config.globalProperties.$api = api
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(ElementPlus).mount('#app')
