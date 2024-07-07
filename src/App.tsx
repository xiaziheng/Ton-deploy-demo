/*
 * @Description: new js file
 * @Author: ziheng.xia@okg.com
 * @Date: 2024-07-07 21:51:20
 * @LastEditTime: 2024-07-07 22:50:35
 * @LastEditors: ziheng.xia@okg.com
 * @FilePath: /my-react-telegram-web-app/src/App.tsx
 */


import './App.css'
import { TonConnectButton } from "@tonconnect/ui-react";
import WebApp from '@twa-dev/sdk'
import Deploy from './deploy.tsx'
function App() {

  return (
    <>
      <div>
        <TonConnectButton></TonConnectButton>
        <Deploy></Deploy>
        </div>
        {/* 在此处添加带有警告回调的按钮 */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            显示警告
        </button>
      </div>
    </>
  )
}

export default App