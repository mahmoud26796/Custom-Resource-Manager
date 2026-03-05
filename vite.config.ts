import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base : './', // specify the correct base path so the assets work properly
  build: {
    outDir: 'dist-react'
  }
})
