import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import CreateAxios from './axios'
/* eslint-disable no-new */
new CreateAxios(store)

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
