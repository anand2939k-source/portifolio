import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
=======
export default defineConfig({
  base: '/portifolio/',
>>>>>>> a052555e51ba19399f42754dae050db9befd2c6f
  plugins: [react(), tailwindcss()],
})

