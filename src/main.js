import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


const pinia = createPinia()
const app = createApp(App)

app.mount('#app')
app.use(pinia)