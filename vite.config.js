import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {
    port: 5173,
    host: '0.0.0.0',    // ✅ Safer external access for local testing (especially mobile/tablet)
    strictPort: true,   // ✅ Don't auto-switch ports (fail fast if busy)
    open: true          // ✅ Automatically open browser window on `npm run dev`
  },
  define: {
    __VUE_OPTIONS_API__: true,  // ✅ Explicitly enable Options API (you use both Composition & Options API)
    __VUE_PROD_DEVTOOLS__: false
  }
})
