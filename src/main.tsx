/*
 * @Description: new js file
 * @Author: ziheng.xia@okg.com
 * @Date: 2024-07-07 21:51:20
 * @LastEditTime: 2024-07-07 22:41:21
 * @LastEditors: ziheng.xia@okg.com
 * @FilePath: /my-react-telegram-web-app/src/main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
WebApp.ready();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <TonConnectUIProvider manifestUrl="https://minter.ton.org/tonconnect-manifest.json">
            <App />
      </TonConnectUIProvider>
  </React.StrictMode>,
)
