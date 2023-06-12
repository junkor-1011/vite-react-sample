import 'vitest/config'
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      enabled: true,
    },
    setupFiles: [
      path.resolve(__dirname, './vitest-setup.ts'),
    ],
    globalSetup: [
      path.resolve(__dirname, './vitest-global-setup.ts'),
    ],
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  }
})
