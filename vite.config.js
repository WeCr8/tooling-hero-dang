import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,         // Default Vite port (can customize if needed)
    host: true,         // Allows external devices to connect (good for testing mobile/tablet)
  }
})
