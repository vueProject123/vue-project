import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Classify from '@/components/Classify'
import Car from '@/components/Car'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/main'},
    {path:'*',redirect:'/main'},
    {path:'/main',name:'main',component:Main},
    {path:'/classify',name:'classify',component:Classify},
    {path:'/car',name:'car',component:Car},
    {path:'/mine',name:'mine',component:Mine}
  ]
})
