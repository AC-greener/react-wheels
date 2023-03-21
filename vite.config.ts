import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import replace from '@rollup/plugin-replace';
// import rawPlugin from 'vite-plugin-raw';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // replace({
    //   values: {
    //     // 你想要替换的字符串
    //     'const sourceCode = require': 'const sourceCode =',
    //   },
    //   preventAssignment: true,
    // }),
  ],
})
