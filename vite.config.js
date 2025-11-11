import { defineConfig } from 'vite';
import { resolve } from 'path';
import { bundleObfuscator } from 'vite-plugin-bundle-obfuscator';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['bootstrap', 'luxon']
        }
      }
    }
  },
  server: {
    port: 8080
  },
  plugins: [
    bundleObfuscator({
      compact: true,
      controlFlowFlattening: false, // Отключаем для меньшего размера
      deadCodeInjection: false, // Отключаем для меньшего размера
      debugProtection: false, // Отключаем для меньшего размера
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      numbersToExpressions: false,
      renameGlobals: false,
      selfDefending: false,
      simplify: true,
      splitStrings: false,
      stringArray: false, // Отключаем для значительного уменьшения размера
      stringArrayEncoding: [],
      stringArrayThreshold: 0,
      unicodeEscapeSequence: false
    })
  ]
});