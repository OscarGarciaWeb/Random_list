import { createRouter, createWebHistory } from 'vue-router'
import RandomNamesVue from '@/components/RandomNames.vue'
import ResultList from '@/components/ResultList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RandomNamesVue
    },
    {
      path: "/resultList",
      name: "resultList",
      component: ResultList
    }
  ]
})

export default router
