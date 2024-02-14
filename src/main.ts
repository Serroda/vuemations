import { createApp } from 'vue'
import { routerInstance } from './modules/router'
import App from './App.vue'
import 'uno.css'
import './style.css'

const { router } = routerInstance()

const app = createApp(App)
app.use(router)
app.mount('#app')
