import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import customSelectFromTo from "@/components/customSelectFromTo.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Home',
      component: Home
    },
    {
      path:'/customSelect',
      name:'customSelectFromTo',
      component: customSelectFromTo
    },

  ]
})

export default router
