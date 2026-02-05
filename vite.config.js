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
})
