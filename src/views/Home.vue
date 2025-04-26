<template>
  <section class="text-center py-20 px-4 max-w-5xl mx-auto">
    <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
      Welcome to <span class="text-blue-600 dark:text-blue-400">Tooling Hero</span>
    </h1>
    <p class="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
      Intelligent Tooling for the Next Generation of Manufacturing.
    </p>

    <!-- Start App Button -->
    <button
      @click="startApp"
      class="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700 transition duration-200"
    >
      🚀 Start App
    </button>
  </section>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const loginModalRef = inject('loginModalRef')

const startApp = () => {
  const auth = getAuth()
  const user = auth.currentUser

  if (user) {
    router.push('/dashboard')
  } else {
    loginModalRef?.openLogin()
  }
}
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
}
</style>
