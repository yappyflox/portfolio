import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures assets are loaded correctly on GitHub Pages
  resolve: {
    alias: {
      'components': fileURLToPath(new URL('./src/components', import.meta.url)),
      'sections': fileURLToPath(new URL('./src/sections', import.meta.url))
    }
  }
}) 