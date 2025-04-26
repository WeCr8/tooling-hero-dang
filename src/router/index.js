import { createRouter, createWebHistory } from 'vue-router'
import { auth, db } from '@/firebase/init'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

// Views
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Library from '@/views/Library.vue'
import Account from '@/views/Account.vue'
import Settings from '@/views/Settings.vue'
import DANG from '@/views/DANG.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'MarketingLayout' }
  },
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
    meta: { layout: 'DefaultLayout', requiresAuth: true }
  },
  {
    path: '/library',
    name: 'Library',
    component: Library,
    meta: { layout: 'DefaultLayout', requiresAuth: true, requiresSubscription: true }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { layout: 'DefaultLayout', requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
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
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let authResolved = false

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const guestOnly = to.matched.some(record => record.meta.guestOnly)
  const requiresSubscription = to.matched.some(record => record.meta.requiresSubscription)

  const resolveNavigation = async (user) => {
    if (requiresAuth && !user) {
      return next({ name: 'Login' })
    }

    if (guestOnly && user) {
      return next({ name: 'Dashboard' })
    }

    if (requiresSubscription && user) {
      const userDoc = await getDoc(doc(db, 'users', user.uid))
      const subscription = userDoc.data()?.subscription

      if (!subscription || subscription.status !== 'active') {
        alert('⚠️ You need an active subscription to access the Library!')
        return next({ name: 'Dashboard' })
      }
    }

    return next()
  }

  const currentAuth = getAuth()

  if (authResolved) {
    await resolveNavigation(currentAuth.currentUser)
  } else {
    onAuthStateChanged(currentAuth, async user => {
      authResolved = true
      await resolveNavigation(user)
    })
  }
})

export default router
