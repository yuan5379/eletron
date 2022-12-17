import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'
import App from './App.vue'

import 'normalize.css' //reset.css
import '@/assets/common.css'

createApp(App).use(router).use(createPinia()).mount('#app')
