<template>
  <div class="max-w-5xl mx-auto mt-16 p-6 space-y-8">
    <h1 class="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
      ⚙️ Settings
    </h1>

    <!-- Team Management Section -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Team Members</h2>

      <div v-if="members.length === 0" class="text-gray-400 text-sm">
        No team members yet.
      </div>

      <ul v-else class="space-y-4">
        <li
          v-for="member in members"
          :key="member.id"
          class="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow border dark:border-gray-700"
        >
          <div>
            <div class="font-semibold">{{ member.email }}</div>
            <div class="text-xs text-gray-400 capitalize">
              Role: {{ member.role }}
            </div>
          </div>

          <div v-if="isAdmin && member.id !== auth.currentUser.uid" class="flex gap-2">
            <button
              @click="promoteToAdmin(member)"
              v-if="member.role !== 'admin'"
              class="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
            >
              Promote
            </button>
            <button
              @click="removeMember(member)"
              class="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </li>
      </ul>
    </section>

    <!-- Invite Member Section (Admins Only) -->
    <section v-if="isAdmin" class="pt-8 border-t dark:border-gray-700">
      <h2 class="text-xl font-semibold mb-4">Invite New Member</h2>

      <div class="space-y-4">
        <input v-model="inviteEmail" placeholder="Enter Email" class="input" />
        <select v-model="inviteRole" class="input">
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>

        <button @click="inviteMember" class="btn bg-[#0077B6] hover:bg-[#0096C7]">
          Invite
        </button>

        <p v-if="inviteStatus" class="text-green-600 text-sm">{{ inviteStatus }}</p>
        <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
      </div>
    </section>

    <!-- Dark Mode Setting -->
    <section class="pt-8 border-t dark:border-gray-700">
      <h2 class="text-xl font-semibold mb-4">Appearance</h2>

      <div class="flex items-center gap-4">
        <label class="text-sm">Dark Mode</label>
        <input type="checkbox" v-model="darkMode" @change="toggleDarkMode" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth, db } from '@/firebase/init'
import { doc, getDoc, collection, getDocs, setDoc, deleteDoc } from 'firebase/firestore'

const members = ref([])
const inviteEmail = ref('')
const inviteRole = ref('viewer')
const inviteStatus = ref('')
const error = ref('')

const teamId = ref('')
const userRole = ref('')
const darkMode = ref(localStorage.getItem('theme') === 'dark')

const isAdmin = computed(() => userRole.value === 'admin')

onMounted(async () => {
  const user = auth.currentUser
  if (!user) return

  const userSnap = await getDoc(doc(db, 'users', user.uid))
  teamId.value = userSnap.data()?.teamId
  userRole.value = userSnap.data()?.role

  if (!teamId.value) return

  const membersSnap = await getDocs(collection(db, `teams/${teamId.value}/members`))
  members.value = membersSnap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
})

const inviteMember = async () => {
  if (!inviteEmail.value || !inviteRole.value) return

  try {
    const memberId = inviteEmail.value.replace(/[^a-zA-Z0-9]/g, '_')

    await setDoc(doc(db, `teams/${teamId.value}/members/${memberId}`), {
      email: inviteEmail.value,
      role: inviteRole.value,
      invitedAt: new Date()
    })

    inviteStatus.value = '✅ Invite sent!'
    error.value = ''
    inviteEmail.value = ''
    inviteRole.value = 'viewer'

    // Refresh members list
    const membersSnap = await getDocs(collection(db, `teams/${teamId.value}/members`))
    members.value = membersSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (err) {
    console.error('Error inviting member:', err)
    error.value = err.message
    inviteStatus.value = ''
  }
}

const removeMember = async (member) => {
  if (!confirm(`Remove ${member.email} from team?`)) return

  await deleteDoc(doc(db, `teams/${teamId.value}/members/${member.id}`))
  members.value = members.value.filter(m => m.id !== member.id)
}

const promoteToAdmin = async (member) => {
  await setDoc(doc(db, `teams/${teamId.value}/members/${member.id}`), {
    ...member,
    role: 'admin'
  })

  const membersSnap = await getDocs(collection(db, `teams/${teamId.value}/members`))
  members.value = membersSnap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

// Handle Dark Mode Toggle
const toggleDarkMode = () => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
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
