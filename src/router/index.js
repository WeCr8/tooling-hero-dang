import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Library from '../views/Library.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    // public route — accessible by anyone
  },
  {
    path: '/library',
    name: 'Library',
    component: Library,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestOnly: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let authResolved = false

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const guestOnly = to.matched.some(record => record.meta.guestOnly)

  const resolveNavigation = (user) => {
    if (requiresAuth && !user) {
      return next('/login')
    }
    if (guestOnly && user) {
      return next('/dashboard')
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
