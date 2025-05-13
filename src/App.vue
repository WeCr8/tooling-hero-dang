<template>
  <div id="app" class="min-h-screen bg-gray-100 text-gray-900 font-sans antialiased">
    <!-- Global Modals -->
    <LoginRegisterModal ref="loginModalRef" />
    <DemoModal ref="demoModalRef" />

    <!-- Dynamic Layout -->
    <component :is="layoutComponent">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import { computed, ref, provide } from 'vue'
import { useRoute } from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MarketingLayout from '@/layouts/MarketingLayout.vue'

// Modals
import LoginRegisterModal from '@/components/LoginRegisterModal.vue'
import DemoModal from '@/components/DemoModal.vue'

// Modal refs
const loginModalRef = ref(null)
const demoModalRef = ref(null)
provide('loginModalRef', loginModalRef)
provide('demoModalRef', demoModalRef)

// Dynamic layout logic
const route = useRoute()
const layoutComponent = computed(() => {
  switch (route.meta.layout) {
    case 'AuthLayout':
      return AuthLayout
    case 'MarketingLayout':
      return MarketingLayout
    default:
      return DefaultLayout
  }
})
</script>
