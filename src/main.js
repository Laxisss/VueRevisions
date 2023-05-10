import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'

createApp(App).use(router).mount('#app')

window.addEventListener('load', () => {
  store.data = JSON.parse(localStorage.getItem('store'))
})
window.addEventListener('beforeunload', () => {
  localStorage.setItem('store', JSON.stringify(store.data))
})
