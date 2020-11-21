import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import header from '../views/header'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'header',
    component: header,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/develop',
        name: 'Develop',
        component: () => import('../views/develop')
      }
      
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
