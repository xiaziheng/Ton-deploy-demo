/*
 * @Description: new js file
 * @Author: ziheng.xia@okg.com
 * @Date: 2024-07-07 22:42:59
 * @LastEditTime: 2024-07-07 22:46:18
 * @LastEditors: ziheng.xia@okg.com
 * @FilePath: /my-react-telegram-web-app/src/lib/utils.ts
 */

import { Wallet } from "ton";

export async function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}


export async function waitForSeqno(wallet: Wallet) {
  const seqnoBefore = await wallet.getSeqNo();

  return async () => {
    for (let attempt = 0; attempt < 25; attempt++) {
      await sleep(3000);
      const seqnoAfter = await wallet.getSeqNo();
      if (seqnoAfter > seqnoBefore) return;
    }
    throw new Error("Timeout");
  };
}