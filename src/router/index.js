import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/TensorsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/detail/:name',
    name: 'detail',
    component: () => import('../views/TensionDetail.vue')
  },
  {
    path: '/device',
    name: 'devices',
    component: () => import('../views/DevicesManager.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
