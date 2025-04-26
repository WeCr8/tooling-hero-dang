<template>
  <div class="max-w-xl mx-auto mt-20 p-6 bg-white dark:bg-gray-800 shadow-md rounded space-y-6">
    <h1 class="text-3xl font-extrabold text-center text-[#1B2A41] dark:text-white">
      👤 My Account
    </h1>

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

      <!-- Phone -->
      <div>
        <label class="block font-medium text-sm mb-1">Phone</label>
        <input v-model="phone" type="text" class="input" />
      </div>

      <!-- Company / Role -->
      <div>
        <label class="block font-medium text-sm mb-1">Role</label>
        <input :value="role" type="text" class="input opacity-60 cursor-not-allowed" disabled />
      </div>

      <!-- Team ID (readonly) -->
      <div>
        <label class="block font-medium text-sm mb-1">Team ID</label>
        <input :value="teamId" type="text" class="input opacity-60 cursor-not-allowed" disabled />
      </div>

      <!-- Save Button -->
      <button @click="saveProfile" class="btn bg-[#0077B6] hover:bg-[#0096C7]">
        💾 Save Changes
      </button>

      <!-- Feedback -->
      <p v-if="status" class="text-green-600 text-sm text-center">{{ status }}</p>
      <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, updateProfile } from 'firebase/auth'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'

const displayName = ref('')
const email = ref('')
const role = ref('')
const phone = ref('')
const teamId = ref('')

const status = ref('')
const error = ref('')

const auth = getAuth()
const db = getFirestore()

onMounted(async () => {
  const user = auth.currentUser
  if (!user) return

  email.value = user.email || ''

  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid))
    if (userDoc.exists()) {
      const data = userDoc.data()
      displayName.value = data.displayName || ''
      role.value = data.role || 'viewer'
      phone.value = data.phone || ''
      teamId.value = data.teamId || ''
    }
  } catch (err) {
    console.error('Failed to load user profile', err)
    error.value = 'Failed to load profile.'
  }
})

const saveProfile = async () => {
  const user = auth.currentUser
  if (!user) return

  try {
    await updateProfile(user, { displayName: displayName.value })

    const userRef = doc(db, 'users', user.uid)

    await updateDoc(userRef, {
      displayName: displayName.value,
      phone: phone.value
    })

    // Update also under team members if needed
    if (teamId.value) {
      const memberRef = doc(db, `teams/${teamId.value}/members/${user.uid}`)
      await updateDoc(memberRef, {
        displayName: displayName.value
      })
    }

    status.value = '✅ Profile updated successfully!'
    error.value = ''
  } catch (err) {
    console.error('Save profile failed:', err)
    error.value = err.message
    status.value = ''
  }
}
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 dark:border-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0077B6];
}
.btn {
  @apply w-full text-white py-2 rounded font-semibold transition duration-150;
}
</style>
