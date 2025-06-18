<template>
  <div class="max-w-4xl mx-auto mt-16 p-6 bg-white dark:bg-gray-800 rounded shadow space-y-6">
    <div v-if="!onboardingMode" class="text-center space-y-6 py-10">
      <h2 class="text-2xl font-bold text-[#1B2A41] dark:text-white">Start Tool Onboarding</h2>
      <p class="text-gray-500 dark:text-gray-300">Choose how you’d like to add your tool.</p>
      <div class="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
        <button @click="setMode('scan')" class="onboarding-btn">📦 Scan Tool</button>
        <button @click="setMode('lookup')" class="onboarding-btn">🔍 Lookup</button>
        <button @click="setMode('ai')" class="onboarding-btn">🧠 Use AI</button>
        <button @click="setMode('manual')" class="onboarding-btn">✍️ Manual Entry</button>
      </div>
    </div>

    <div v-else-if="onboardingMode !== 'manual'" class="text-center py-10">
      <h2 class="text-xl font-bold mb-4 text-white">Coming Soon: {{ onboardingMode.toUpperCase() }} Mode</h2>
      <button @click="resetMode" class="bg-gray-600 text-white px-4 py-2 rounded">⬅ Back</button>
    </div>

    <div v-if="onboardingMode === 'manual'">
      <h1 class="text-3xl font-extrabold text-center text-[#1B2A41] dark:text-white">
        Create New <span class="text-[#0077B6]">DANG</span> Tool ID & Description 🔧
      </h1>
      <p class="text-sm text-gray-500 dark:text-gray-300 text-center">
        Fill it out like a pro, or just guess and let DANG help you look smart.
      </p>

      <div class="mt-6">
        <label class="block font-semibold mb-1">Tool Type</label>
        <select v-model="selectedToolName" class="input">
          <option value="" disabled>Select a tool</option>
          <option v-for="tool in toolDefinitions" :key="tool.tool_name" :value="tool.tool_name">
            [{{ tool.abbreviation }}] {{ tool.tool_name }}
          </option>
        </select>
      </div>

      <div v-if="activeTool" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label class="block font-semibold mb-1">Tool Abbreviation</label>
          <input :value="activeTool.abbreviation" class="input bg-gray-100" disabled />
        </div>
        <div>
          <label class="block font-semibold mb-1">Unit System</label>
          <div class="flex gap-2">
            <button :class="unit === 'imperial' ? activeBtn : inactiveBtn" @click="unit = 'imperial'">Inch (in)</button>
            <button :class="unit === 'metric' ? activeBtn : inactiveBtn" @click="unit = 'metric'">Metric (mm)</button>
          </div>
        </div>
      </div>

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

      <div v-if="activeTool" class="space-y-4 mt-4">
        <div v-for="field in extractedFields" :key="field">
          <label class="block text-sm font-medium mb-1">
            {{ field.label }} <span class="text-gray-400 text-xs">{{ unit === 'imperial' ? '(in)' : '(mm)' }}</span>
          </label>
          <input
            v-model="fieldValues[field.key]"
            class="input"
            :placeholder="'Enter ' + field.label"
          />
        </div>
      </div>

      <div v-if="generatedToolID" class="p-4 bg-blue-50 dark:bg-gray-700 rounded border-l-4 border-blue-400 dark:border-blue-500">
        <p class="font-bold text-sm text-gray-600 dark:text-gray-300 mb-1">Generated Tool ID:</p>
        <p class="text-md font-mono text-blue-700 dark:text-blue-400">{{ generatedToolID }}</p>
      </div>

      <div v-if="generatedDescription" class="p-4 bg-gray-100 dark:bg-gray-700 rounded border-l-4 border-blue-600 dark:border-blue-500">
        <p class="font-bold text-sm text-gray-600 dark:text-gray-300 mb-1">Generated Description:</p>
        <p class="text-md font-mono text-blue-700 dark:text-blue-400">{{ generatedDescription }}</p>
      </div>

      <div v-if="generatedToolID && generatedDescription" class="flex items-center gap-4">
        <button @click="saveToLibrary" :disabled="isSaving" class="bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700">
          💾 Save to Tool Library
        </button>
        <span class="text-sm text-gray-700 dark:text-gray-300">{{ saveStatus }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { db } from '@/firebase/init';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toolDefinitionsJson from '@/assets/dang_tool_definitions.json';
import { useAuth } from '@/composables/useAuth';

const { user, teamId } = useAuth();
const onboardingMode = ref('');
const selectedToolName = ref('');
const unit = ref('imperial');
const holderPlatform = ref('1');
const fieldValues = ref({});
const isSaving = ref(false);
const saveStatus = ref('');
const toolDefinitions = ref(toolDefinitionsJson.tool_definitions);

const activeBtn = 'bg-blue-600 text-white px-3 py-1 rounded';
const inactiveBtn = 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded';

const setMode = (mode) => { onboardingMode.value = mode; };
const resetMode = () => {
  onboardingMode.value = '';
  selectedToolName.value = '';
  fieldValues.value = {};
  holderPlatform.value = '1';
  unit.value = 'imperial';
  saveStatus.value = '';
};

const activeTool = computed(() =>
  toolDefinitions.value.find(t => t.tool_name === selectedToolName.value)
);

const extractedFields = computed(() => {
  if (!activeTool.value) return [];
  return activeTool.value.description_formula.match(/\{([^}]+)\}/g)?.map(key => {
    const cleanKey = key.replace(/[{}]/g, '');
    return { label: cleanKey.replace(/_/g, ' '), key: cleanKey };
  }) || [];
});

const generatedToolID = computed(() => {
  if (!activeTool.value) return '';
  const base = `[${activeTool.value.abbreviation}]`;
  const segments = extractedFields.value.map(f => fieldValues.value[f.key] || '').filter(Boolean);
  return base + (segments.length ? '-' + segments.join('-') : '');
});

const generatedDescription = computed(() => {
  if (!activeTool.value) return '';
  const raw = activeTool.value.description_formula;
  return raw.replace(/\{([^}]+)\}/g, (_, key) => fieldValues.value[key] || '?');
});

const saveToLibrary = async () => {
  if (!user.value || !teamId.value) return;
  isSaving.value = true;
  saveStatus.value = 'Saving...';
  await addDoc(collection(db, 'teams', teamId.value, 'tools'), {
    tool_name: selectedToolName.value,
    tool_id: generatedToolID.value,
    description: generatedDescription.value,
    unit: unit.value,
    holder_platform: holderPlatform.value,
    fields: fieldValues.value,
    created_by: user.value.uid,
    created_at: serverTimestamp()
  });
  saveStatus.value = 'Saved!';
  isSaving.value = false;
};
</script>
