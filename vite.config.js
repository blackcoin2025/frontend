import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Utiliser '@' pour référencer le dossier src
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Adresse de ton backend FastAPI en local
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Supprime le /api du chemin
      },
    },
  },
})
