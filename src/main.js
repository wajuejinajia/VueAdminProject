import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
import router from './router'
// element-plus 的完整引入，需要考虑最后打包的体积
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')
