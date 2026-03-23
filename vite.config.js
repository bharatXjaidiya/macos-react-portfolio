import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
     minify: 'esbuild',
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  }
})
