<template>
  <div class="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-6 relative">
    <!-- Account Dropdown Button -->
    <div class="absolute top-0 right-0">
      <div class="relative" v-click-outside="closeDropdown">
        <button
          @click="toggleDropdown"
          class="bg-gray-100 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Account ⌄
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50"
        >
          <router-link
            to="/account"
            class="block px-4 py-2 text-sm hover:bg-gray-100"
            @click="closeDropdown"
          >
            👤 My Account
          </router-link>

          <template v-if="user">
            <button
              @click="logout"
              class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              🚪 Logout
            </button>
          </template>

          <template v-else>
            <router-link
              to="/login"
              class="block px-4 py-2 text-sm hover:bg-gray-100"
              @click="closeDropdown"
            >
              🔐 Login
            </router-link>
            <router-link
              to="/register"
              class="block px-4 py-2 text-sm hover:bg-gray-100"
              @click="closeDropdown"
            >
              📝 Register
            </router-link>
          </template>
        </div>
      </div>
    </div>

    <!-- Main Dashboard Welcome -->
    <div>
      <h1 class="text-2xl font-bold">Welcome, {{ displayName || 'Guest' }}</h1>
      <p class="text-gray-600 mt-1">
        Tooling Hero: <span class="font-semibold">DANG</span> is ready for deployment.
      </p>
      <p class="text-sm text-gray-400">UID: {{ uid || 'Not signed in' }}</p>
    </div>

    <!-- Navigation Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <router-link
        to="/DANG"
        class="bg-blue-600 text-white font-medium py-3 px-4 rounded hover:bg-blue-700 text-center"
      >
        🆕 Create New Tool ID
      </router-link>

      <router-link
        to="/library"
        class="bg-green-600 text-white font-medium py-3 px-4 rounded hover:bg-green-700 text-center"
      >
        📚 View Saved Library
      </router-link>

      <router-link
        to="/settings"
        class="bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded hover:bg-gray-300 text-center"
      >
        ⚙️ Settings
      </router-link>

      <button
        @click="logout"
        class="bg-red-600 text-white font-medium py-3 px-4 rounded hover:bg-red-700 text-center"
        v-if="user"
      >
        📦 Logout
      </button>
    </div>
  </div>
</template>

<script>
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/init'

export default {
  name: 'Dashboard',
  data() {
    return {
      user: null,
      uid: null,
      displayName: null,
      dropdownOpen: false
    }
  },
  directives: {
    clickOutside: {
      beforeMount(el, binding) {
        el.clickOutsideEvent = event => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event)
          }
        }
        document.addEventListener('click', el.clickOutsideEvent)
      },
      unmounted(el) {
        document.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    closeDropdown() {
      this.dropdownOpen = false
    },
    logout() {
      signOut(auth).then(() => {
        this.user = null
        this.uid = null
        this.displayName = null
        this.dropdownOpen = false
        this.$router.push('/login')
      })
    }
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user
        this.uid = user.uid
        this.displayName = user.displayName || user.email?.split('@')[0]
      }
    })
  }
}
</script>