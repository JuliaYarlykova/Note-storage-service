

// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'

import PageFolder from './components/PageFolder.vue'
import PageMain from './components/PageMain.vue'

import { createPinia, defineStore } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import PageOneFolder from './components/PageOneFolder.vue'
import PageOneNote from './components/PageOneNote.vue'
import AuthPP from './components/pp/AuthPP.vue'
import LoginPP from './components/pp/LoginPP.vue'
import NotePP from './components/pp/NotePP.vue'

const pinia = createPinia()
export const useUserStore = defineStore('counter', {
  state: () => ({ login: '', username: '', hasUser: false, id:0 }),
  
})

export const useFolderStore = defineStore('folder', {
  state: () => ({ title: '' }),
  
})

export const useNoteStore = defineStore('note', {
  state: () => ({ title: '' }),
  
})


const routes = [
    { path: '/', component: PageMain },
    { path: '/folder', component: PageFolder },
    {path: '/auth', component: LoginPP},
    {path: '/registration', component: AuthPP},
    {path: '/folder/:title', component: PageOneFolder, name: 'intoFolder'},
    {path: '/folder/:title/:titleNote', component: PageOneNote, name:'intoNote'},
    {path: '/:commonNote', component: AuthPP},
    {path: '/folder/:title/createNote', component: NotePP},

  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
