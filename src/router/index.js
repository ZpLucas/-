import Vue from 'vue'
import VueRouter from 'vue-router'

import Interlayer from '../pages/Interlayer/Interlayer.vue'
import Home from '../pages/Home/Home.vue'
import Seeing from '../pages/Seeing/Seeing.vue'
import Sort from '../pages/Sort/Sort.vue'
import Cart from '../pages/Cart/Cart.vue'
import Person from '../pages/Person/Person.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/interlayer'
    },
    {
      path:'/interlayer',
      component:Interlayer,
    },

    {
      path:'/home',
      component:Home,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/seeing',
      component:Seeing,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/sort',
      component:Sort,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/person',
      component:Person,
      meta: {
        showFooter: true
      }
    }
  ]
})
