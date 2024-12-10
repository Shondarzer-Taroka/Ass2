import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react-intersection-observer'],
  },
  plugins: [react(),ghPages()],
  base:'Ass2',
  build:{
    chunkSizeWarningLimit:16000
  }
})
