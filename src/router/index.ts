import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '@/store'
import SignIn from '../views/SignIn.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  }
  //{
    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.status.loggedIn) {
    if (to.name !== 'Home' && to.name !== 'SignIn') {
      next('Home')
    } else {
      next()
    }
  } else {
    if (to.name === 'Home' || to.name === 'SignIn') {
      next('Dashboard')
    } else {
      next()
    }
  }
})

export default router
