// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 // Tailwind v4 handled by CSS import


export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
