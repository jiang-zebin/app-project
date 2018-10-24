import Vue from 'vue'
import Router from 'vue-router'
import Info from './components/Info'
import Friends from './components/Friends'
import Tv from './components/Tv'
import Shop from './components/Shop'
import Gameinfo from './components/Gameinfo'
import InfoDetails from './components/InfoDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/info"},
    {path:'/info',component:Info},
    {path:'/friends',component:Friends},
    {path:'/tv',component:Tv},
    {path:'/shop',component:Shop},
    {path:'/gameinfo',component:Gameinfo},
    {path:'/info/infodetails/:nid',component:InfoDetails}
  ]
})
