<template>
  <div class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col">
    <!-- Top Navigation -->
    <nav class="flex items-center justify-between px-6 py-4 shadow sticky top-0 bg-white dark:bg-gray-900 z-50">
      <!-- Logo -->
      <router-link to="/" aria-label="Tooling Hero Home" class="text-xl font-bold flex items-center gap-2">
        <img src="/logo.png" alt="Tooling Hero Logo" class="h-8" />
        <span>Tooling Hero</span>
      </router-link>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <button
          @click="startApp"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition duration-200"
          aria-label="Start App"
        >
          🚀 Start App
        </button>

        <button
          @click="openDemo"
          class="text-blue-600 hover:underline hidden sm:inline text-sm"
          aria-label="Request Demo"
        >
          🎯 Request a Demo
        </button>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t dark:border-gray-700 mt-8">
      © {{ new Date().getFullYear() }} Tooling Hero. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const loginModalRef = inject('loginModalRef')
const demoModalRef = inject('demoModalRef')

const startApp = () => {
  const auth = getAuth()
  const user = auth.currentUser

  if (user) {
    router.push('/dashboard')
  } else {
    loginModalRef?.openLogin()
  }
}

const openDemo = () => {
  demoModalRef?.open()
}
</script>

<style scoped>
/* Optional, already using Tailwind classes */
</style>
