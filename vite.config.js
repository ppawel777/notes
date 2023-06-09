import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifestFilename: 'manifest.json',
      workbox: {
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
      },
      manifest: {
        name: 'Notes-Lite',
        short_name: 'NL',
        // start_url: '/',
        display: 'standalone',
        background_color: '#f1f6d9',
        theme_color: '#cfdba3',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/icons/icon-48x48.png',
            type: 'image/png',
            sizes: '48x48',
          },
          {
            src: '/icons/icon-72x72.png',
            type: 'image/png',
            sizes: '72x72',
          },
          {
            src: '/icons/icon-96x96.png',
            type: 'image/png',
            sizes: '96x96',
          },
          {
            src: '/icons/icon-128x128.png',
            type: 'image/png',
            sizes: '128x128',
          },
          {
            src: '/icons/icon-144x144.png',
            type: 'image/png',
            sizes: '144x144',
          },
          {
            src: '/icons/icon-152x152.png',
            type: 'image/png',
            sizes: '152x152',
          },
          {
            src: '/icons/icon-192x192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any maskable',
          },
          {
            src: '/icons/icon-284x284.png',
            type: 'image/png',
            sizes: '284x284',
          },
          {
            src: '/icons/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
    })
  ],
})
