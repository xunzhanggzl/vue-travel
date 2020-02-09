import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import City from '../views/city/City'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
