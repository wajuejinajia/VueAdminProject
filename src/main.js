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

const app = createApp(App)
const pinia = createPinia()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(ElementPlus).use(pinia).mount('#app')
