<template>
    <section class="text-center py-20 px-4 max-w-5xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">
        Boost your <span class="text-blue-600">Machining</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-300 text-lg mb-6">
        The indispensable complement for your CNC operations.
      </p>
  
      <router-link
        to="/app/DANG"
        class="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700"
      >
        Start App
      </router-link>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <img src="https://images.unsplash.com/photo-1" class="rounded shadow" />
        <img src="https://images.unsplash.com/photo-2" class="rounded shadow" />
        <img src="https://images.unsplash.com/photo-3" class="rounded shadow" />
      </div>
    </section>
  </template>
  
  <script setup>
  // Optional static homepage, no logic needed yet
  </script>
  