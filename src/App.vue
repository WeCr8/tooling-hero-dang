<template>
  <div>
    <!-- Global Modals -->
    <LoginRegisterModal ref="loginModalRef" />
    <DemoModal ref="demoModalRef" />

    <!-- Dynamic Layouts -->
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

const route = useRoute()

// Provide modal references globally (Navbar, Home, etc. can use them)
const loginModalRef = ref(null)
const demoModalRef = ref(null)

provide('loginModalRef', loginModalRef)
provide('demoModalRef', demoModalRef)

// Dynamically pick layout
const layoutComponent = computed(() => {
  const layout = route.meta.layout
  return layout === 'AuthLayout'
    ? AuthLayout
    : layout === 'MarketingLayout'
    ? MarketingLayout
    : DefaultLayout
})
</script>

<style>
body {
  @apply bg-gray-100 text-gray-900 font-sans;
}
</style>
