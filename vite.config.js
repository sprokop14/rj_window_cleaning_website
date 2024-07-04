// Tell Vite where to look for our project's JavaScript and how the development server should behave // 

import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}