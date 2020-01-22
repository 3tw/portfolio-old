import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../components/Projects.vue')
  },
  {
    path: '/projects/tom-website',
    name: 'TomWebsite',
    component: () => import('../components/projects/TomWebsite.vue')
  },
  {
    path: '/projects/go4trail',
    name: 'Go4trail',
    component: () => import('../components/projects/Go4trail.vue')
  },
  {
    path: '/projects/climate-prototype',
    name: 'ClimatePrototype',
    component: () => import('../components/projects/ClimateProto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
