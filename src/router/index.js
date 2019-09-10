import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from "./home"
import consult from "./consult"
import movie from "./movie"
import mine from "./mine"
export default new Router({
  routes: [
   {path:"/",redirect:"/home"},
   home,consult,movie,mine,
  
  //  {path:"/home",component:()=>import("@/views/Home")}
    {path:"*",redirect:"/home"},
  ]
})
