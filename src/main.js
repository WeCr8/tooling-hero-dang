// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import clickOutside from '@/directives/clickOutside'
import '@/assets/tailwind.css'

// Create Vue app instance
const app = createApp(App)

// Register custom directives
app.directive('click-outside', clickOutside)

// Register global plugins
app.use(router)

// Mount the app
app.mount('#app')
