<template>
  <div class="space-y-6">
    <!-- Tooling Hero Welcome -->
    <div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        🧠 Welcome to <span class="text-blue-600 dark:text-blue-400">Tooling Hero: DANG</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-1">
        Your Tool ID & Description Generator is ready to work.
      </p>
    </div>

    <!-- Navigation Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        to="/DANG"
        class="bg-blue-600 text-white font-medium py-3 px-4 rounded hover:bg-blue-700 text-center shadow"
      >
        🆕 Create New Tool ID
      </router-link>

      <router-link
        to="/library"
        class="bg-green-600 text-white font-medium py-3 px-4 rounded hover:bg-green-700 text-center shadow"
      >
        📚 View Saved Library
      </router-link>

      <router-link
        to="/settings"
        class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium py-3 px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-center shadow"
      >
        ⚙️ Settings
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No auth logic or user data needed in dashboard
</script>
