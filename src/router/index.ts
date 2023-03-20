import { createRouter, createWebHistory } from 'vue-router'
import RandomNamesVue from '@/components/RandomNames.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RandomNamesVue
    }
  ]
})

export default router
