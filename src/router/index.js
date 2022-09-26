import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/login.vue')
    }
  ]
})

export default router
