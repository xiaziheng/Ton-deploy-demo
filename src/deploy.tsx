/*
 * @Description: new js file
 * @Author: ziheng.xia@okg.com
 * @Date: 2024-07-07 22:41:56
 * @LastEditTime: 2024-07-07 23:07:11
 * @LastEditors: ziheng.xia@okg.com
 * @FilePath: /my-react-telegram-web-app/src/deploy.tsx
 */
import { beginCell,toNano,Address} from "ton";
import { waitForSeqno } from "./lib/utils";

import {  useTonConnectUI } from "@tonconnect/ui-react";
import { getClient } from "./lib/get-ton-client";
// const Buffer = require("buffer/").Buffer;


function DeployerPage() {
   const [tonconnect] = useTonConnectUI();
  const deploy = async() => { 
    const ownerAddress = Address.parse('UQAIw52nPvpsdXEkh9s-Bgz77o1J9KGeqnhPWBOcuhAWzjC_');
    const commonContentUrl = "item.json";
    // 构造交易消息
    const body = beginCell();
    // op == 1  = deploy single NFT
    body.storeUint(1, 32);
    // query_id let it be 0
    body.storeUint(0, 64);

    // index - take next index from file TBD
    body.storeUint(235, 64);
    
    body.storeCoins(toNano("0.05"));

    const nftItemContent = beginCell();
    nftItemContent.storeAddress(ownerAddress);

    const uriContent = beginCell();
    uriContent.storeBuffer(Buffer.from(commonContentUrl));
    nftItemContent.storeRef(uriContent.endCell());

    body.storeRef(nftItemContent.endCell());

   
    const readyBody = body.endCell();

     const contractAddress = Address.parse('EQDf6HCOggN_ZGL6YsYleN6mDiclQ_NJOMY-x8G5cTRDOBW4'); // 替换为你的智能合约地址
    const tc = await getClient();
    const waiter = await waitForSeqno(
      tc.openWalletFromAddress({
        source: ownerAddress,
      }),
    );
    try {
      const tx = {
        validUntil: Date.now() + 5 * 60 * 1000,
        messages: [
          {
            address: contractAddress.toString(),
            amount: toNano('0.1').toString(),
            stateInit: undefined,
            text: "tonspeedrun",
            payload: readyBody.toBoc().toString("base64"),
          },
        ],
      };
      // 发送交易
      await tonconnect.sendTransaction(tx);
      await waiter()
    } catch (error) {
      console.error(error);
    }
  
  }
  return (
    <div>
      <button
      onClick={deploy}
      type="button">
       Deploy
      </button>
    </div>
    
  );
}

export default DeployerPage;

