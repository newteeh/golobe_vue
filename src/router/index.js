import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import customSelectFromTo from "@/components/customSelectFromTo.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/signup.vue";
import SelectDatePicker from "@/components/SelectDatePicker.vue";
import customSelectPassenegersClasses from "@/components/customSelectPassenegersClasses.vue";
import Account from "@/views/Account.vue";
import flightsSearch from "@/views/flightsSearch.vue";
import adminPanel from "@/views/adminPanel.vue";


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
    },
    {
      path:'/selectPassengersClasses',
      name:'selectPassengersClasses',
      component:customSelectPassenegersClasses
    },
    {
      path:'/account',
      name:'Account',
      component:Account
    },
    {
      path:'/search/flights',
      name:'flightsSearch',
      component:flightsSearch
    },
    {
      path:'/adminPanel',
      name:'adminPanel',
      component:adminPanel
    }




  ]
})

export default router
