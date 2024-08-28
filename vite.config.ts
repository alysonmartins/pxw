import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://www.proexweb.com/',
  plugins: [react()],
  publicDir: 'public',
})
