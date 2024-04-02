

import { createApp } from 'vue'
import App from './App.vue'

import PageFolder from './components/PageFolder.vue'
import PageMain from './components/PageMain.vue'

import { createRouter, createWebHistory } from 'vue-router'



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
