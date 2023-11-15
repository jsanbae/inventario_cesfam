import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  optimizeDeps: {
    include: [
      '@apollo/client/core',
      '@apollo/client/cache'
    ]
  },
  build: {
    minify: true,
    outDir: "dist"
  },
});
