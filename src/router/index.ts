import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/home/HomePage.vue') },
  { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
  { path: '/register', component: () => import('@/views/register/RegisterPage.vue') },
  {  path: '/sinisters', component: () => import('@/views/sinisters/SinistersPage.vue') },
  {  path: '/reports', component: () => import('@/views/tracking/TrackingPage.vue') },
]

const router = createRouter({
  history: createWebHistory('/MediCar/'),
  routes,
})

export default router
