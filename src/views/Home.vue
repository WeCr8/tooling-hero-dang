<template>
  <section class="bg-white pt-24 pb-32 text-center fade-in">
    <div class="container mx-auto">
      <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Welcome to <span class="text-blue-600">Tooling Hero</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-xl mx-auto mb-12">
        Empowering manufacturers with smarter tooling workflows — from shop floor to digital twin.
      </p>

      <!-- Start App Button -->
      <button
        @click="handleStartApp"
        class="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700 transition duration-200"
      >
        🚀 Start App
      </button>
    </div>
  </section>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const loginModalRef = inject('loginModalRef')

const handleStartApp = () => {
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/dashboard')
    } else {
      loginModalRef?.openLogin()
    }
  })
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.8s ease-in-out both;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
