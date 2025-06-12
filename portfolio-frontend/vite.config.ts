import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // ← allows LAN access
    port: 5173,         // (optional) ensure consistent port
    strictPort: true,   // (optional) prevents fallback to another port
  },
})
