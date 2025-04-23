<template>
  <div class="max-w-md mx-auto mt-20 space-y-4 text-center">
  <h1 class="text-3xl text-green-600 font-bold">Tailwind is working ✅</h1>
    <h1 class="text-2xl font-bold">Register for DANG</h1>
    <input v-model="email" type="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Password" class="input" />
    <button @click="register" class="btn bg-green-600">Register</button>
    <p class="text-sm mt-2 text-gray-500">
      Already have an account?
      <router-link class="underline text-blue-600" to="/login">Login</router-link>
    </p>
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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
</script>

<style scoped>
.input {
  @apply w-full border p-2 rounded;
}
.btn {
  @apply w-full text-white py-2 rounded;
}
</style>
