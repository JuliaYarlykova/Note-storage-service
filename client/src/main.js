

import { createApp } from 'vue'
import App from './App.vue'

import PageFolder from './components/PageFolder.vue'
import PageMain from './components/PageMain.vue'

import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const pinia = createPinia()



const routes = [
    { path: '/', component: PageMain },
    { path: '/folder', component: PageFolder },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  createApp(App)
  .use(router)
  .mount('#app')
