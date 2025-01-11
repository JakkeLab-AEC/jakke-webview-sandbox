import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),  // index.html 파일
      }
    }
  }
})
