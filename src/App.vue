<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const route = useRoute()

// Choose layout based on route.meta.layout
const layoutComponent = computed(() => {
  const layout = route.meta.layout
  return layout === 'AuthLayout' ? AuthLayout : DefaultLayout
})
</script>

<style>
body {
  @apply bg-gray-100 text-gray-900 font-sans;
}
</style>
