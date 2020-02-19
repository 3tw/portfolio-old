import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {transitionType: 'fade'}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
    meta: {transitionType: 'slide'}
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */  '../components/Projects.vue'),
    meta: {transitionType: 'slide'}
  },
  {
    path: '/projects/tom-website',
    name: 'TomWebsite',
    component: () => import(/* webpackChunkName: "TomWebsite" */ '../components/projects/TomWebsite.vue'),
    meta: {transitionType: 'fade'}
  },
  {
    path: '/projects/t3v',
    name: 'T3V',
    component: () => import(/* webpackChunkName: "T3V" */ '../components/projects/T3V.vue'),
    meta: {transitionType: 'fade'}
  },
  {
    path: '/projects/climate-prototype',
    name: 'ClimatePrototype',
    component: () => import(/* webpackChunkName: "ClimatePrototype" */ '../components/projects/ClimateProto.vue'),
    meta: {transitionType: 'fade'}
  }
]

const router = new VueRouter({
  routes
})

export default router
