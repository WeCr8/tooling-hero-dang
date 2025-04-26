<template>
  <div>
    <!-- Global Login/Register Modal -->
    <LoginRegisterModal ref="loginModalRef" />

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

// Modal
import LoginRegisterModal from '@/components/LoginRegisterModal.vue'

const route = useRoute()

// Allow any component (like Navbar) to access the modal globally
const loginModalRef = ref(null)
provide('loginModalRef', loginModalRef)

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
