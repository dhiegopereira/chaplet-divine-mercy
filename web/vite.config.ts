import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: Number(process.env.VITE_PORT) || 3000,
     strictPort: true
  },
  plugins: [react()],
})
