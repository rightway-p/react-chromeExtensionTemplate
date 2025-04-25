import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  // 빌드 옵션 주석 처리
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: 'index.html',
  //     }
  //   }
  // }
})
