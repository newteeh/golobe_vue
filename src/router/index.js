import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import customSelectFromTo from "@/components/customSelectFromTo.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/signup.vue";
import SelectDatePicker from "@/components/SelectDatePicker.vue";

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
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/signup',
      name:'Signup',
      component:Signup
    },
    {
      path:'/selectDatePicker',
      name:'SelectDatePicker',
      component:SelectDatePicker
    }



  ]
})

export default router
