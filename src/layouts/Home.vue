<template>
  <section class="text-center py-24 px-4 max-w-5xl mx-auto">
    <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
      Welcome to <span class="text-blue-600 dark:text-blue-400">Tooling Hero</span>
    </h1>
    <p class="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
      Intelligent Tooling for the Next Generation of Manufacturing.
    </p>

    <div class="flex justify-center gap-4 flex-wrap">
      <!-- Start App Button -->
      <button
        @click="startApp"
        aria-label="Start App"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow transition duration-200"
      >
        🚀 Start App
      </button>

      <!-- Request Demo Button -->
      <button
        @click="openDemo"
        aria-label="Request a Demo"
        class="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-200"
      >
        🎯 Request Demo
      </button>
    </div>
  </section>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { inject, nextTick } from 'vue'

const router = useRouter()
const loginModalRef = inject('loginModalRef')
const demoModalRef = inject('demoModalRef')

const startApp = async () => {
  const auth = getAuth()
  let user = auth.currentUser

  if (!user) {
    // Sometimes on slow mobile the user isn't immediately available
    await nextTick()
    user = auth.currentUser
  }

  if (user) {
    router.push('/dashboard')
  } else {
    loginModalRef?.openLogin()
  }
}

const openDemo = () => {
  if (demoModalRef) {
    demoModalRef.open()
  } else {
    console.warn('Demo modal not available yet')
  }
}
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
}
</style>
