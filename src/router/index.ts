import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/home/HomePage.vue') },
  { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
  { path: '/register', component: () => import('@/views/register/RegisterPage.vue') },
  {  path: '/sinisters', component: () => import('@/views/sinisters/SinistersPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
