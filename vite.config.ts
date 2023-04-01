import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        display: 'block',
        families: ['Open Sans'],
        injectTo: 'head-prepend',
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~/sections',
        replacement: path.resolve(__dirname, 'src', 'sections'),
      },
      {
        find: '~/utils',
        replacement: path.resolve(__dirname, 'src', 'utils'),
      },
      {
        find: '~/layouts',
        replacement: path.resolve(__dirname, 'src', 'layouts'),
      },
      {
        find: '~/components',
        replacement: path.resolve(__dirname, 'src', 'components'),
      },
    ],
  },
});
