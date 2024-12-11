import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gesm_final/', // Replace 'my-repo-name' with the name of your GitHub repository
  build: {
    outDir: 'dist',
  },
})