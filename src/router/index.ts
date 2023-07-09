import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Home from '@/pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
