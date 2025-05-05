import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import "dotenv/config";

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))
  const apiTargetUrl = `${process.env.CLOUD_SCHEME}://${process.env.CLOUD_HOST}:${process.env.CLOUD_PORT}/api`;
  console.log(`apiTargetUrl: ${apiTargetUrl}`)

  return defineConfig({
    // server config
    server: {
      port: process.env.PORT || 3000,
      hmr: {
        overlay: mode === 'production' ? false : true
      },
      proxy: {
        '/api': {
          target: apiTargetUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },      
      }
    },
    preview: {
      port: process.env.PORT || 3000
    },
    
    // plugins
    plugins: [react()]
  })
}
