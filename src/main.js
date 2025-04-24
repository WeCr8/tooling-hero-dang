import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import clickOutside from '@/directives/clickOutside'
import '@/assets/tailwind.css'

// Create the app
const app = createApp(App)

// Register global directives before mounting
app.directive('click-outside', clickOutside)

// Use plugins like router, store
app.use(router)

// Mount the app
app.mount('#app')
