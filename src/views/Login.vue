<template>
  <div class="max-w-md mx-auto mt-20 space-y-4 text-center">
    <h1 class="text-2xl font-bold">Login to DANG</h1>
    <input v-model="email" type="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Password" class="input" />
    <button @click="login" class="btn bg-blue-600">Login</button>

    <div class="my-4 text-gray-500">or</div>

    <button @click="loginWithGoogle" class="btn bg-red-500">Sign in with Google</button>
    <p class="text-sm mt-2 text-gray-500">
      Don’t have an account?
      <router-link class="underline text-blue-600" to="/register">Register</router-link>
    </p>
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  try {
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}

const loginWithGoogle = async () => {
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}

onMounted(() => {
  onAuthStateChanged(getAuth(), user => {
    if (user) router.push('/')
  })
})
</script>

<style scoped>
.input {
  @apply w-full border p-2 rounded;
}
.btn {
  @apply w-full text-white py-2 rounded;
}
</style>
