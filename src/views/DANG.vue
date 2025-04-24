
<template>
  <div class="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded space-y-6">
    <h1 class="text-3xl font-extrabold text-[#1B2A41] text-center">
      Create New <span class="text-[#0077B6]">DANG</span> Tool ID & Description 🔧
    </h1>
    <p class="text-sm text-gray-500 text-center">
      Fill it out like a pro, or just guess and let DANG tool help you look smart.
    </p>

    <!-- Tool Type Dropdown -->
    <div>
      <label class="block font-semibold mb-1">Tool Type</label>
      <select v-model="selectedToolName" class="input">
        <option value="" disabled>Select a tool</option>
        <option v-for="tool in toolDefinitions" :key="tool.tool_name" :value="tool.tool_name">
          [{{ tool.abbreviation }}] {{ tool.tool_name }}
        </option>
      </select>
    </div>

    <!-- Abbreviation & Unit System -->
    <div v-if="activeTool" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block font-semibold mb-1">Tool Abbreviation</label>
        <input :value="activeTool.abbreviation" class="input bg-gray-100" disabled />
      </div>

      <div>
        <label class="block font-semibold mb-1">Unit System</label>
        <div class="flex gap-2">
          <button :class="['input text-sm text-center w-full', unit === 'imperial' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300']" @click="unit = 'imperial'">Imperial (in)</button>
          <button :class="['input text-sm text-center w-full', unit === 'metric' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300']" @click="unit = 'metric'">Metric (mm)</button>
        </div>
      </div>
    </div>

    <!-- Holder Platform -->
    <div v-if="activeTool" class="mt-4">
      <label class="block font-semibold mb-1">Holder Platform</label>
      <select v-model="holderPlatform" class="input">
        <option value="1">CAT40</option>
        <option value="2">CAT50</option>
        <option value="3">BT40</option>
        <option value="4">HSK63</option>
        <option value="5">HSK100</option>
      </select>
    </div>

    <!-- Dynamic Input Fields -->
    <div v-if="activeTool" class="space-y-4 mt-4">
      <div v-for="field in extractedFields" :key="field">
        <label class="block text-sm font-medium mb-1">
          {{ field }} <span class="text-gray-400 text-xs">{{ unit === 'imperial' ? '(in)' : '(mm)' }}</span>
        </label>
        <input v-model="fieldValues[field]" type="text" class="input" :placeholder="`Enter ${field}`" />
      </div>
    </div>

    <!-- Tool ID Output -->
    <div v-if="generatedToolID" class="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400">
      <p class="font-bold text-sm text-gray-600 mb-1">Generated Tool ID:</p>
      <p class="text-md font-mono text-blue-700">{{ generatedToolID }}</p>
    </div>

    <!-- Description Output -->
    <div v-if="generatedDescription" class="mt-4 p-4 bg-gray-100 rounded border-l-4 border-blue-600">
      <p class="font-bold text-sm text-gray-600 mb-1">Generated Description:</p>
      <p class="text-md font-mono text-blue-700 break-words">{{ generatedDescription }}</p>
    </div>

    <!-- Save Tool -->
    <div v-if="generatedToolID && generatedDescription" class="mt-4 flex items-center gap-4">
      <button @click="saveToLibrary" :disabled="isSaving" class="bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700">
        💾 Save to Tool Library
      </button>
      <span class="text-sm text-gray-700">{{ saveStatus }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { getFirestore, collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import toolDefinitionsJson from '@/assets/dang_tool_definitions.json'

const db = getFirestore()
const auth = getAuth()

const toolDefinitions = ref(toolDefinitionsJson.tool_definitions)
const selectedToolName = ref('')
const fieldValues = ref({})
const unit = ref('imperial')
const holderPlatform = ref('1')
const buildNumber = ref('000')

const activeTool = computed(() =>
  toolDefinitions.value.find(t => t.tool_name === selectedToolName.value)
)

const extractVariables = formula => {
  const matches = formula.match(/{(.*?)}/g) || []
  return matches.map(v => v.replace(/[{}]/g, '')).filter(v => v !== 'Tool Type Abbreviation')
}

const extractedFields = computed(() =>
  activeTool.value ? extractVariables(activeTool.value.description_formula) : []
)

const generatedDescription = computed(() => {
  if (!activeTool.value) return ''
  let formula = activeTool.value.description_formula
  formula = formula.replaceAll('{Tool Type Abbreviation}', activeTool.value.abbreviation)
  for (const field of extractedFields.value) {
    let value = fieldValues.value[field] || ''
    if (field.toLowerCase() === 'projection length') {
      const num = parseFloat(value)
      value = isNaN(num) ? '' : num.toFixed(3)
    }
    formula = formula.replaceAll(`{${field}}`, value)
  }
  return formula
})

const formattedSize = computed(() => {
  const raw = fieldValues.value['Cut Diameter']
  return raw && !isNaN(raw) ? Number.parseFloat(raw).toFixed(3) : '0.000'
})

const generatedToolID = computed(() => {
  if (!activeTool.value) return ''
  return `${activeTool.value.abbreviation}-${holderPlatform.value}-${formattedSize.value}-${buildNumber.value}`
})

watch(activeTool, async (tool) => {
  if (tool?.unit) unit.value = tool.unit

  const baseID = `${tool.abbreviation}-${holderPlatform.value}-${formattedSize.value}`
  const q = query(collection(db, 'tool_library'), where('tool_id', '>=', baseID))
  const docs = await getDocs(q)
  const matching = docs.docs.map(doc => doc.data().tool_id).filter(id => id.startsWith(baseID))

  if (matching.length > 0) {
    const numbers = matching.map(id => parseInt(id.split('-').pop())).filter(n => !isNaN(n))
    const maxBuild = Math.max(...numbers)
    buildNumber.value = String(maxBuild + 1).padStart(3, '0')
  } else {
    buildNumber.value = '000'
  }
})

const saveStatus = ref('')
const isSaving = ref(false)

const saveToLibrary = async () => {
  isSaving.value = true
  saveStatus.value = ''
  const tool_id = generatedToolID.value
  try {
    const q = query(collection(db, 'tool_library'), where('tool_id', '==', tool_id))
    const existing = await getDocs(q)
    if (!tool_id || !generatedDescription.value || existing.size > 0) {
      saveStatus.value = existing.size > 0 ? '❌ Tool ID already exists.' : '❌ Incomplete tool info.'
      isSaving.value = false
      return
    }

    await addDoc(collection(db, 'tool_library'), {
      tool_id,
      description: generatedDescription.value,
      tool_type: selectedToolName.value,
      abbreviation: activeTool.value.abbreviation,
      fields: { ...fieldValues.value },
      unit: unit.value,
      holder_platform: holderPlatform.value,
      created_at: serverTimestamp(),
      created_by: auth.currentUser?.email || 'anonymous'
    })

    saveStatus.value = '✅ Tool saved!'
  } catch (err) {
    console.error(err)
    saveStatus.value = '❌ Save failed.'
  } finally {
    isSaving.value = false
  }
}
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0077B6];
}
</style>
