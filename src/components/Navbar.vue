<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow flex items-center justify-between px-4 py-2">
      <!-- Left: Hamburger -->
      <button @click="$emit('toggleDrawer')" class="text-2xl text-gray-700 dark:text-gray-200" aria-label="Open Menu">
        <i class="fas fa-bars"></i>
      </button>
  
      <!-- Center: Logo -->
      <router-link to="/" class="absolute left-1/2 transform -translate-x-1/2" aria-label="Home">
        <img src="/logo.png" alt="Logo" class="h-8" />
      </router-link>
  
      <!-- Right: Controls -->
      <div class="flex items-center gap-4">
        <!-- Unit Toggle -->
        <div class="flex border rounded overflow-hidden text-sm font-medium" role="group" aria-label="Unit Toggle">
          <button @click="setUnit('inch')" :class="unit === 'inch' ? activeBtn : inactiveBtn">Inch</button>
          <button @click="setUnit('metric')" :class="unit === 'metric' ? activeBtn : inactiveBtn">Metric</button>
        </div>
  
        <!-- Account Dropdown -->
        <div class="relative" v-click-outside="closeDropdown">
          <button
            @click="toggleDropdown"
            class="text-gray-700 dark:text-gray-200 flex items-center gap-1"
            aria-haspopup="true"
            :aria-expanded="dropdownOpen.toString()"
            aria-label="Account Menu"
          >
            <i class="fas fa-user-circle text-2xl"></i>
            <span class="text-sm hidden sm:inline">Account</span>
          </button>
  
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-lg z-50"
          >
            <router-link to="/account" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" @click="closeDropdown">
              👤 My Account
            </router-link>
            <router-link to="/settings" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" @click="closeDropdown">
              ⚙️ Settings
            </router-link>
  
            <template v-if="user">
              <button @click="logout" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                🚪 Logout
              </button>
            </template>
            <template v-else>
              <router-link to="/login" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" @click="closeDropdown">
                🔐 Login
              </router-link>
              <router-link to="/register" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" @click="closeDropdown">
                📝 Register
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { onAuthStateChanged, signOut } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import { auth } from '@/firebase/init'
  
  const router = useRouter()
  
  const user = ref(null)
  const dropdownOpen = ref(false)
  const unit = ref(localStorage.getItem('unit') || 'inch')
  
  const activeBtn = 'bg-blue-600 text-white px-2 py-1'
  const inactiveBtn = 'bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1'
  
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
  }
  
  const closeDropdown = () => {
    dropdownOpen.value = false
  }
  
  const setUnit = (selected) => {
    unit.value = selected
    localStorage.setItem('unit', selected)
  }
  
  const logout = async () => {
    await signOut(auth)
    user.value = null
    dropdownOpen.value = false
    router.push('/login')
  }
  
  const escHandler = (e) => {
    if (e.key === 'Escape') closeDropdown()
  }
  
  onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        user.value = currentUser
      }
    })
    document.addEventListener('keydown', escHandler)
  })
  
  onUnmounted(() => {
    document.removeEventListener('keydown', escHandler)
  })
  </script>
  
  <style scoped>
  nav {
    height: 56px;
  }
  </style>
  