import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    ],
  },
});
