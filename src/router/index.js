import Vue from 'vue'
import VueRouter from 'vue-router'
import Hotel from '../views/Hotel'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/hotel',
    name: 'Hotel',
    component: Hotel
  },
  {
    path: '/flight',
    name: 'Flight',
    component: () => import(/* webpackChunkName: "other" */ '../views/Flight.vue')
  },
  {
    path: '/car-rental',
    name: 'CarRental',
    component: () => import(/* webpackChunkName: "other" */ '../views/CarRental.vue')
  },
  {
    path: '/tours',
    name: 'Tours',
    component: () => import(/* webpackChunkName: "other" */ '../views/Tours.vue')
  },
  {
    path: '*',
    redirect: '/hotel'
  }
  
]

const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
