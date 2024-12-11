import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy  } from 'vite-plugin-static-copy'; // Add PluginOption import

export default defineConfig({
  plugins: [
    react() as PluginOption,
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@galaxyops/design-system/dist/assets/*',
          dest: 'assets'
        }
      ]
    }) as PluginOption // Add type assertion
  ],
  esbuild: { target: 'es2022' },
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
});