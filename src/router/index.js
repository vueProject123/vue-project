import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Detail from '@/components/mainComponents/listComponents/DetailComponent'
import Classify from '@/components/Classify'
import Car from '@/components/Car'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import SearchTest from '@/components/SearchTest'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/main'},
    {path:'*',redirect:'/main'},
    {path:'/main',name:'main',component:Main},
    {path:'/detail/:id',name:'detail',component:Detail},
    {path:'/classify',name:'classify',component:Classify},
    {path:'/car',name:'car',component:Car},
    {path:'/mine',name:'mine',component:Mine},
    {path:'/search',name:'search',component:Search},
    {path:'/searchtest/:word',name:'searchtest',component:SearchTest}
  ]
})
