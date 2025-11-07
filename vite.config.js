import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change the base to match your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // 👈 must match your GitHub repo name
});
