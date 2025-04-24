<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Global Navbar -->
      <Navbar />
  
      <!-- Main Content Slot (offset from fixed navbar) -->
      <main class="pt-16">
        <div class="max-w-5xl w-full mx-auto px-4">
          <slot />
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue'
  </script>
  