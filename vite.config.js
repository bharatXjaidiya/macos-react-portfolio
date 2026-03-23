import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // ✅ only one minifier

    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'rnd-vendor': ['react-rnd'],
          'markdown-vendor': ['react-markdown', 'react-syntax-highlighter'],
        }
      }
    },

    chunkSizeWarningLimit: 500,
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  }
})