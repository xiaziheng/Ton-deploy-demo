/*
 * @Description: new js file
 * @Author: ziheng.xia@okg.com
 * @Date: 2024-07-07 21:51:20
 * @LastEditTime: 2024-07-07 23:30:04
 * @LastEditors: ziheng.xia@okg.com
 * @FilePath: /my-react-telegram-web-app/vite.config.ts
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';

export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
    }),
    inject({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  build: {
    outDir: './docs',
  },
  base: './',
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
  // server: {
  //   host: '127.0.0.1',
  //   port: 5173,
  // },
});
