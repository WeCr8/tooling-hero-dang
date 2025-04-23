<template>
  <div class="max-w-md mx-auto mt-20 px-6 py-8 bg-[#F5F7FA] shadow-xl rounded-lg space-y-6 text-center border border-[#1B2A41]/10">
    <!-- Branding -->
    <div>
      <h1 class="text-3xl font-extrabold text-[#1B2A41]">Tooling Hero</h1>
      <p class="text-sm text-[#0077B6] tracking-wide">Register your DANG account</p>
    </div>

    <!-- Email Form -->
    <div class="space-y-3 text-left">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="input"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="input"
      />
      <button @click="register" class="btn bg-[#0077B6] hover:bg-[#0096C7]">
        Register with Email
      </button>
    </div>

    <!-- Divider -->
    <div class="flex items-center gap-2 text-gray-400 text-sm">
      <div class="flex-1 border-t"></div>
      or
      <div class="flex-1 border-t"></div>
    </div>

    <!-- Third-party auth -->
    <div class="space-y-3">
      <button @click="registerWithGoogle" class="btn bg-[#D62828] hover:bg-red-700">
        🔴 Register with Google
      </button>
      <button @click="registerWithApple" class="btn bg-[#1B2A41] hover:bg-gray-900">
         Register with Apple
      </button>
    </div>

    <p class="text-sm mt-4 text-gray-500">
      Already have an account?
      <router-link class="underline text-[#0077B6] hover:text-[#0096C7]" to="/login">Login here</router-link>
    </p>

    <p v-if="error" class="text-[#D62828] text-sm">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider
} from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const register = async () => {
  try {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}

const registerWithGoogle = async () => {
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}

const registerWithApple = async () => {
  try {
    const auth = getAuth()
    const provider = new OAuthProvider('apple.com')
    await signInWithPopup(auth, provider)
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0077B6];
}
.btn {
  @apply w-full text-white py-2 rounded font-semibold transition duration-150;
}
</style>
