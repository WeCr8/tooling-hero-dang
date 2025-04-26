<template>
  <div class="max-w-5xl mx-auto mt-16 p-6 space-y-6">
    <h1 class="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
      📚 Tool Library
    </h1>
    <p class="text-center text-gray-600 dark:text-gray-300">
      View and manage your team's saved tools.
    </p>

    <div v-if="tools.length === 0" class="text-center text-gray-400 mt-10">
      No tools found yet. Start creating in the DANG Generator!
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="tool in tools"
        :key="tool.toolId"
        class="p-4 bg-white dark:bg-gray-800 rounded shadow border dark:border-gray-700 flex flex-col gap-2"
      >
        <h2 class="text-lg font-bold text-blue-600 dark:text-blue-400">
          {{ tool.toolId }}
        </h2>
        <p class="text-sm text-gray-500 dark:text-gray-300 mb-2">
          {{ tool.description }}
        </p>

        <div class="text-xs text-gray-400 space-y-1 mb-4">
          <div><strong>Type:</strong> {{ tool.tool_type }}</div>
          <div><strong>Material:</strong> {{ tool.fields?.Material || 'N/A' }}</div>
          <div><strong>Holder:</strong> {{ tool.holder_platform || 'N/A' }}</div>
        </div>

        <div class="flex gap-2 mt-auto">
          <button
            @click="downloadXML(tool)"
            class="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-xs"
          >
            📥 Download XML
          </button>

          <button
            v-if="isAdmin"
            @click="deleteTool(tool.id)"
            class="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 text-xs"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onSnapshot, getDoc, doc, collection, deleteDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase/init'

const tools = ref([])
const unsubscribe = ref(null)
const teamId = ref('')
const isAdmin = ref(false)

onMounted(async () => {
  const user = auth.currentUser
  if (!user) return

  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid))
    teamId.value = userDoc.data()?.teamId
    isAdmin.value = userDoc.data()?.role === 'admin'

    if (!teamId.value) {
      console.warn('⚠️ No team assigned.')
      return
    }

    const toolsRef = collection(db, `teams/${teamId.value}/tools`)

    // 📡 Real-time listener
    unsubscribe.value = onSnapshot(toolsRef, (snapshot) => {
      tools.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    })

  } catch (err) {
    console.error('Error loading tools:', err)
  }
})

onUnmounted(() => {
  if (unsubscribe.value) unsubscribe.value()
})

const downloadXML = (tool) => {
  const xmlContent = `
  <tool>
    <toolId>${tool.toolId}</toolId>
    <description>${tool.description}</description>
    <type>${tool.tool_type}</type>
    <material>${tool.fields?.Material || 'Unknown'}</material>
    <holder>${tool.holder_platform || 'Unknown'}</holder>
  </tool>`.trim()

  const blob = new Blob([xmlContent], { type: 'application/xml' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `${tool.toolId}.xml`
  a.click()

  URL.revokeObjectURL(url)
}

const deleteTool = async (toolDocId) => {
  if (!confirm('Are you sure you want to delete this tool?')) return

  try {
    await deleteDoc(doc(db, `teams/${teamId.value}/tools/${toolDocId}`))
    console.log('✅ Tool deleted successfully')
  } catch (err) {
    console.error('Error deleting tool:', err)
  }
}
</script>
