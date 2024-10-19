import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    liveReload('src/**/*.{js,jsx,ts,tsx}'), // Passe o caminho diretamente como argumento
  ]
})