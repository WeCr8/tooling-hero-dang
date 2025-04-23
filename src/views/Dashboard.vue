<template>
  <div class="p-6 max-w-5xl mx-auto">
    <header class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <button
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        @click="logout"
      >
        Logout
      </button>
    </header>

    <section class="bg-white shadow-md rounded p-4">
      <h2 class="text-xl font-semibold mb-2">User Info</h2>
      <div v-if="user">
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>UID:</strong> {{ user.uid }}</p>
      </div>
      <div v-else>
        <p class="text-gray-500">No user is currently logged in.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'Dashboard',
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$router.push('/login')
        })
        .catch(error => {
          console.error('Logout error:', error)
        })
    }
  },
  mounted() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      this.user = user
    })
  }
}
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
