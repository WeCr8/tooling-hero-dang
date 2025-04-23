<template>
    <div class="max-w-xl mx-auto mt-20 p-6 bg-white shadow-md rounded space-y-6">
      <h1 class="text-2xl font-bold text-[#1B2A41]">My Account</h1>
  
      <div class="space-y-4">
        <!-- Email (readonly) -->
        <div>
          <label class="block font-medium text-sm mb-1">Email</label>
          <input :value="email" type="email" class="input opacity-60 cursor-not-allowed" disabled />
        </div>
  
        <!-- Display Name -->
        <div>
          <label class="block font-medium text-sm mb-1">Display Name</label>
          <input v-model="displayName" type="text" class="input" />
        </div>
  
        <!-- Company / Role -->
        <div>
          <label class="block font-medium text-sm mb-1">Company / Role</label>
          <input v-model="role" type="text" class="input" />
        </div>
  
        <!-- Phone -->
        <div>
          <label class="block font-medium text-sm mb-1">Phone</label>
          <input v-model="phone" type="text" class="input" />
        </div>
  
        <!-- Save Button -->
        <button @click="saveProfile" class="btn bg-[#0077B6] hover:bg-[#0096C7]">
          Save Changes
        </button>
  
        <!-- Feedback -->
        <p v-if="status" class="text-green-600 text-sm">{{ status }}</p>
        <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { getAuth, updateProfile } from 'firebase/auth'
  import { getFirestore, doc, setDoc } from 'firebase/firestore'
  
  const displayName = ref('')
  const email = ref('')
  const role = ref('')
  const phone = ref('')
  const status = ref('')
  const error = ref('')
  
  const auth = getAuth()
  const db = getFirestore()
  
  onMounted(() => {
    const user = auth.currentUser
    if (user) {
      displayName.value = user.displayName || ''
      email.value = user.email || ''
    }
  })
  
  const saveProfile = async () => {
    const user = auth.currentUser
    if (!user) return
  
    try {
      await updateProfile(user, { displayName: displayName.value })
  
      await setDoc(doc(db, 'users', user.uid), {
        displayName: displayName.value,
        email: email.value,
        role: role.value,
        phone: phone.value
      }, { merge: true })
  
      status.value = 'Profile updated successfully!'
      error.value = ''
    } catch (err) {
      console.error(err)
      error.value = err.message
      status.value = ''
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
  