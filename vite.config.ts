/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/trello-app/',
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
  },
});
