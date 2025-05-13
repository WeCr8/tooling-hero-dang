<template>
  <section class="bg-white pt-24 pb-32">
    <div class="container text-center fade-in">
      <!-- Hero Section -->
      <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Welcome to <span class="text-blue-600">Tooling Hero</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-xl mx-auto mb-12">
        Empowering manufacturers with smarter tooling workflows — from shop floor to digital twin.
      </p>

      <!-- Start App Button -->
      <div class="mb-20">
        <button
          @click="handleStartApp"
          class="btn-primary"
        >
          🚀 Start App
        </button>
      </div>

      <!-- DANG Section -->
      <div class="bg-gray-50 border border-blue-100 p-10 rounded-xl shadow-md max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">🔥 Meet DANG</h2>
        <p class="text-gray-700 mb-8 leading-relaxed">
          <strong>DANG</strong> (Description And Naming Generator) standardizes your tooling language across Zoller, Mastercam, and ERP systems — cutting confusion and boosting productivity.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <!-- Button with Login Logic -->
          <button @click="handleStartApp" class="btn-primary">
            ⚙️ Launch DANG
          </button>

          <!-- Fallback Learn More -->
          <router-link to="/about" class="btn-secondary">
            📘 Learn More
          </router-link>
        </div>
      </div>
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

/* Reuse the same button styles as toolinghero.us */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow transition duration-200;
}

.btn-secondary {
  @apply border border-blue-500 text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition duration-200;
}
</style>
