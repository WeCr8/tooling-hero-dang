import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/init'
import { onAuthStateChanged } from 'firebase/auth'


// Views
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Library from '@/views/Library.vue'
import Account from '@/views/Account.vue'
import DANG from '@/views/DANG.vue'



const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { layout: 'DefaultLayout', requiresAuth: true }
  },
  {
    path: '/DANG',
    name: 'DANG',
    component: DANG,
    meta: { layout: 'DefaultLayout' } // Public
  },
  {
    path: '/library',
    name: 'Library',
    component: Library,
    meta: { layout: 'DefaultLayout', requiresAuth: true }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { layout: 'DefaultLayout', requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'AuthLayout', guestOnly: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { layout: 'AuthLayout', guestOnly: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let authResolved = false

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const guestOnly = to.matched.some(record => record.meta.guestOnly)

  const resolveNavigation = (user) => {
    if (requiresAuth && !user) {
      return next({ name: 'Login' })
    }
    if (guestOnly && user) {
      return next({ name: 'Dashboard' })
    }
    return next()
  }

  if (authResolved) {
    resolveNavigation(auth.currentUser)
  } else {
    onAuthStateChanged(auth, user => {
      authResolved = true
      resolveNavigation(user)
    })
  }
})

export default router
