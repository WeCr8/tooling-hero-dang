import { createRouter, createWebHistory } from 'vue-router'
import FirebaseAuth from '../components/FirebaseAuth.vue'
import ToolForm from '../components/ToolForm.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', redirect: '/auth' },
  { path: '/auth', component: FirebaseAuth },
  { path: '/dang', component: ToolForm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.path === '/dang'
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next('/auth')
    } else {
      next()
    }
  })
})

export default router