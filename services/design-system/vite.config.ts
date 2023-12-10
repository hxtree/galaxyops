import Checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

const externalPackages: string[] = [
  'react/jsx-runtime',
  ...Object.keys(peerDependencies || {}),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Checker({ typescript: true }),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['src'],
    }),
  ],
  build: {
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: externalPackages,
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        // First the name of the entry point
        // src/foo/bar.js becomes foo/bar
        // Second the absolute path to the entry file
        // src/foo/bar.ts becomes /project/src/foo/bar.ts
        glob
          .sync('src/**/*.{ts,tsx}')
          .map(file => [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
