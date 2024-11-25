import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@galaxyops/design-system/dist/assets/*',
          dest: 'assets'
        }
      ]
    })
  ],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
});