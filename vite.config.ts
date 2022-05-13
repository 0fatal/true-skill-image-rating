import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],

  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
