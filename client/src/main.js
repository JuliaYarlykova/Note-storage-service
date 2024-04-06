

import { createApp } from 'vue'
import App from './App.vue'

import PageFolder from './components/PageFolder.vue'
import PageMain from './components/PageMain.vue'

import { createPinia, defineStore } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import AuthPP from './components/pp/AuthPP.vue'
import LoginPP from './components/pp/LoginPP.vue'

const pinia = createPinia()
export const useUserStore = defineStore('counter', {
  state: () => ({ login: '', username: '', hasUser: false, id:0 }),
  
})


const routes = [
    { path: '/', component: PageMain },
    { path: '/folder', component: PageFolder },
    {path: '/auth', component: LoginPP},
    {path: '/registration', component: AuthPP},
    
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
