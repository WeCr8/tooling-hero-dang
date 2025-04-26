<template>
  <nav class="fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between px-4 py-2">
    <!-- Left: Hamburger -->
    <button @click="$emit('toggleDrawer')" class="text-xl text-gray-700 dark:text-gray-200 sm:hidden">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Center: Logo -->
    <router-link to="/" class="absolute left-1/2 transform -translate-x-1/2" aria-label="Home">
      <img src="/logo.png" alt="Logo" class="h-8" />
    </router-link>

    <!-- Right: Controls -->
    <div class="flex items-center gap-2 sm:gap-4">
      <!-- Unit Toggle -->
      <div class="hidden sm:flex border rounded overflow-hidden text-sm font-medium" role="group">
        <button @click="setUnit('inch')" :class="unit === 'inch' ? activeBtn : inactiveBtn">Inch</button>
        <button @click="setUnit('metric')" :class="unit === 'metric' ? activeBtn : inactiveBtn">Metric</button>
      </div>

      <!-- App Links -->
      <button @click="goToOrLogin('/DANG')" class="hidden sm:inline text-sm px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">
        🧰 Create Tool
      </button>
      <button @click="goToOrLogin('/library')" class="hidden sm:inline text-sm px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">
        📂 Library
      </button>

      <!-- Start App -->
      <button @click="goToOrLogin('/dashboard')" class="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded shadow hover:bg-blue-700">
        Start App
      </button>

      <!-- Account Dropdown -->
      <div class="relative" v-click-outside="closeDropdown">
        <button @click="toggleDropdown" class="text-gray-700 dark:text-gray-200 flex items-center gap-1" aria-haspopup="true" :aria-expanded="dropdownOpen.toString()">
          <i class="fas fa-user-circle text-2xl"></i>
          <span class="hidden sm:inline text-sm">Account</span>
        </button>

        <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-lg z-50">
          <template v-if="user">
            <button @click="goToOrLogin('/account')" class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              👤 My Account
            </button>
            <button @click="goToOrLogin('/settings')" class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              ⚙️ Settings
            </button>
            <button @click="logout" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              🚪 Logout
            </button>
          </template>
          <template v-else>
            <button @click="openLoginModal" class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              🔐 Login / Register
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/init'

const router = useRouter()
const loginModalRef = inject('loginModalRef')

const unit = ref(localStorage.getItem('unit') || 'inch')
const dropdownOpen = ref(false)
const user = ref(null)

const activeBtn = 'bg-blue-600 text-white px-2 py-1'
const inactiveBtn = 'bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1'

const toggleDropdown = () => { dropdownOpen.value = !dropdownOpen.value }
const closeDropdown = () => { dropdownOpen.value = false }

const setUnit = (selected) => {
  unit.value = selected
  localStorage.setItem('unit', selected)
}

const logout = async () => {
  await signOut(auth)
  user.value = null
  closeDropdown()
  router.push('/')
}

const goToOrLogin = (path) => {
  if (user.value) router.push(path)
  else loginModalRef?.openLogin()
}

const openLoginModal = () => {
  closeDropdown()
  loginModalRef?.openLogin()
}

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown()
  })
})

onUnmounted(() => {
  document.removeEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown()
  })
})
</script>

<style scoped>
nav {
  height: 56px;
}
</style>
