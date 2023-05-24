import { createRouter, createWebHistory } from 'vue-router'
import customSelect from "@/components/customSelect.vue";
import Home from "@/views/Home.vue"

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
      name:'customSelect',
      component: customSelect
    }
  ]
})

export default router
