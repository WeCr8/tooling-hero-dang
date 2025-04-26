<template>
    <div class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col">
      <!-- Top Nav -->
      <nav class="flex items-center justify-between px-6 py-4 shadow">
        <router-link to="/" class="text-xl font-bold flex items-center gap-2">
          <img src="/logo.png" alt="Tooling Hero Logo" class="h-8" />
          <span>Tooling Hero</span>
        </router-link>
        <div class="space-x-4">
          <router-link to="/app/DANG" class="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            Start App
          </router-link>
          <a href="#demo" class="text-blue-600 hover:underline hidden sm:inline">Request a Demo</a>
        </div>
      </nav>
  
      <!-- Page Content -->
      <main class="flex-1">
        <slot />
      </main>
  
      <!-- Footer -->
      <footer class="text-center text-sm text-gray-500 py-6 border-t mt-8">
        © {{ new Date().getFullYear() }} Tooling Hero. All rights reserved.
      </footer>
    </div>
  </template>
  