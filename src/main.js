import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import ElementPlus from 'element-plus'
import {ElMessage} from 'element-plus'
import axios from "./utils/request/index";
import store from "./store/index.js";
import ws from "./utils/request/websocketConfig.js";
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const  vue = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    vue.component(key, component)
}
vue.provide('$message', ElMessage)
vue.use(store)
vue.use(router)
vue.use(ElementPlus)
vue.config.globalProperties.axios = axios
vue.config.globalProperties.webSocket = ws
vue.mount('#app')
