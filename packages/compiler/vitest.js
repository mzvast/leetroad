import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    threads: false,
    watch: false,
    include: ['**/*.tests.js'],
  }
})