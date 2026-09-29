import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // the 3D scene (three.js) is lazy-loaded in its own chunk after the intro
    chunkSizeWarningLimit: 1200,
  },
});
