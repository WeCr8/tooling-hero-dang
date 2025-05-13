import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Use a fallback port if 5173 is in use
const DEFAULT_PORT = 5173

export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0',           // ✅ Access from LAN (mobile, tablet, etc.)
      port: DEFAULT_PORT,        // ✅ Preferred port
      strictPort: false,         // ✅ Allow fallback (e.g., 5174, 5175...)
      open: command === 'serve', // ✅ Only open browser in dev mode
    },
    define: {
      __VUE_OPTIONS_API__: true,     // Enable Options API if needed
      __VUE_PROD_DEVTOOLS__: false, // Disable devtools in prod
    },
  }
})
