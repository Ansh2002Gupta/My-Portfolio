import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this project from https://<user>.github.io/My-Portfolio/,
// so every generated asset URL has to be prefixed with that sub-path.
// Anything that needs the prefix at runtime should read `import.meta.env.BASE_URL`
// rather than hard-coding the string.
export default defineConfig({
  base: '/My-Portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssTarget: 'chrome111',
    // Assets below this size are inlined as data URIs; the only images we ship
    // are real photographs/screenshots, so keep the threshold low.
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        // Keep the React runtime in its own chunk. It changes far less often
        // than the content, so a copy edit does not invalidate it in cache.
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
            return 'react';
          }
        },
      },
    },
  },
});
