import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'node:path'
import tailwindcss from 'tailwindcss'
import tsconfigPathPlugin from 'vite-tsconfig-paths'

const tsconfigPaths = tsconfigPathPlugin({
  projects: [resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), tsconfigPaths],
    publicDir: resolve('resources'),
  },
  preload: {
    plugins: [externalizeDepsPlugin(), tsconfigPaths],
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: './src/renderer/tailwind.config.js',
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [react(), tsconfigPaths],
  },
})
