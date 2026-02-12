import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        element: resolve(__dirname, 'element.html'),
        youtube: resolve(__dirname, 'youtube.html'),
        demuxer: resolve(__dirname, 'demuxer.html'),
      },
    },
  },
  server: {
    headers: {
      // Required for SharedArrayBuffer (WebAssembly threading)
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  preview: {
    headers: {
      // Required for SharedArrayBuffer (WebAssembly threading)
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
})
