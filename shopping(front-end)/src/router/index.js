import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
const Login= ()=> import('../pages/Login/Login.vue')

import Shop from '../pages/Shop/Shop.vue'
import Shopnav from '../pages/Shop/Shopnav/Shopnav'
import Shopgoods from '../pages/Shop/Shopgoods/Shopgoods'
import Shopinfo from '../pages/Shop/Shopinfo/Shopinfo'
import Shopratings from '../pages/Shop/Shopratings/Shopratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/shopnav',
          component:Shopnav
        },
        {
          path:'/shop/shopgoods',
          component:Shopgoods
        },
        {
          path:'/shop/shopratings',
          component:Shopratings
        },
        {
          path:'/shop/shopinfo',
          component:Shopinfo
        },
        {
          path:'',
          redirect:'/shop/shopgoods'
        }
      ]
    }
  ],
  mode:'history'
})
