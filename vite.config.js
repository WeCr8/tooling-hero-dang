import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // ✅ Robust alias support
    }
  },
  server: {
    port: 5173,  // You can change this if needed
    host: true   // External network access (useful for mobile testing)
  }
})
