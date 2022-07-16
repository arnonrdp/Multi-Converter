import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/temperature',
      name: 'Temperature',
      component: () => import('../views/Temperature.vue')
    },
    {
      path: '/length',
      name: 'Length',
      component: () => import('../views/Length.vue')
    },
    {
      path: '/time',
      name: 'Time',
      component: () => import('../views/Time.vue')
    }
  ]
})

export default router
