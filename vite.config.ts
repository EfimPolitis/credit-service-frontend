import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), TanStackRouterVite()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
      pages: resolve(__dirname, './src/pages'),
      types: resolve(__dirname, './src/types'),
      hooks: resolve(__dirname, './src/hooks'),
      styles: resolve(__dirname, './src/styles'),
      services: resolve(__dirname, './src/services'),
      constatns: resolve(__dirname, './src/constatns'),
      components: resolve(__dirname, './src/components'),
    },
  },
});
