import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the app under /mui-looks-like-google/ in production.
  // Local dev stays at / so the dev server doesn't need a path prefix.
  base: process.env.NODE_ENV === 'production' ? '/mui-looks-like-google/' : '/',
});
