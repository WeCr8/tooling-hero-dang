<template>
  <section class="pt-20 px-4 max-w-6xl mx-auto space-y-10">
    <!-- Welcome -->
    <div class="text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
        🛠️ Welcome to <span class="text-blue-600 dark:text-blue-400">Tooling Hero: DANG</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-4 text-lg">
        Intelligent Tool ID & Description Generation — ready to boost your workflow.
      </p>
    </div>

    <!-- Quick Actions Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Create Tool -->
      <router-link
        to="/DANG"
        class="group bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow transition transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="text-4xl mb-3 group-hover:animate-bounce">🆕</div>
        <h2 class="text-lg font-semibold">Create New Tool ID</h2>
        <p class="text-sm opacity-80 mt-2">Start generating IDs and descriptions intelligently.</p>
      </router-link>

      <!-- View Library -->
      <router-link
        to="/library"
        class="group bg-green-600 hover:bg-green-700 text-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow transition transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="text-4xl mb-3 group-hover:animate-bounce">📚</div>
        <h2 class="text-lg font-semibold">View Tool Library</h2>
        <p class="text-sm opacity-80 mt-2">Browse, search, and export your saved tools.</p>
      </router-link>

      <!-- Settings -->
      <router-link
        to="/settings"
        class="group bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow transition transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="text-4xl mb-3 group-hover:animate-spin">⚙️</div>
        <h2 class="text-lg font-semibold">Settings</h2>
        <p class="text-sm opacity-80 mt-2">Manage your account, team, and preferences.</p>
      </router-link>
    </div>

    <!-- Future Spot: Stats, Recent Activity, etc -->
    <!--
    <div class="text-center text-gray-400 text-sm mt-10">
      🚧 More widgets coming soon!
    </div>
    -->
  </section>
</template>

<script setup>
// Nothing needed here for now
</script>

<style scoped>
/* Minor polish for optional hover icons */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>
