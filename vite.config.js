import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import expressApp from './server/index.js';

function apiServerPlugin() {
  return {
    name: 'api-server-middleware',
    configureServer(server) {
      server.middlewares.use(expressApp);
    },
    configurePreviewServer(server) {
      server.middlewares.use(expressApp);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), apiServerPlugin()],
  server: {
    port: 5173
  }
});
