const importUMD = async (url, module = { exports: {} }) =>
  (Function("module", "exports", await (await fetch(url)).text()).call(
    module,
    module,
    module.exports,
  ),
    module).exports;

let Aegis = null;
let aegisInstance = null;
const aegisCdn = "https://tam.cdn-go.cn/aegis-sdk/latest/aegis.min.js";

import { TUICallType } from "tuicall-engine-webrtc";

async function createAegis() {
  if (!Aegis) Aegis = await importUMD(aegisCdn);
  const aegis = new Aegis({
    id: "iHWefAYqDNAiuxNMQZ",
    reportApiSpeed: true, // 接口测速
    reportAssetSpeed: true, // 静态资源测速
    version: "1.4.1",
  });
  return aegis;
}

export async function loginSuccess(SDKAppID: number) {
  console.log(TUICallType);
  if (!aegisInstance) aegisInstance = await createAegis();
  aegisInstance.reportEvent({
    name: "login",
    ext1: "login-success",
    ext2: "webTUICallKit",
    ext3: SDKAppID.toString(),
  });
}

export const t = function () {
  console.log(Aegis);
};
