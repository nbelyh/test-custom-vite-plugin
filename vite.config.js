import { defineConfig } from 'vite';
import customFileLoader from './vite-custom-loader.js';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      output: {
        dir: 'dist',
      },
    },
  },
 plugins: [
    customFileLoader(), // Add your plugin to Vite's configuration
  ],
});