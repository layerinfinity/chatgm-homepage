import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        display: 'block',
        families: [
          // Open Sans:wght@400;500;600;700;800
          'Open Sans',
          {
            name: 'Open Sans',
            styles: 'wght@400;500;600;700;800',
          },

          // Outfit:wght@400;500;600;700;800;900
          'Outfit',
          {
            name: 'Outfit',
            styles: 'wght@400;500;600;700;800;900',
          },
        ],
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
      {
        find: '~/api',
        replacement: path.resolve(__dirname, 'src', 'api'),
      },
      {
        find: '~/configs',
        replacement: path.resolve(__dirname, 'src', 'configs'),
      },
      {
        find: '~/pages',
        replacement: path.resolve(__dirname, 'src', 'pages'),
      },
    ],
  },
});
