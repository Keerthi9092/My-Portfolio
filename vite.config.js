// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/', // ⚠️ Must match your GitHub repo name (case-sensitive)
})
