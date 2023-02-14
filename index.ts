import Aegis from "aegis-web-sdk";

const aegis = new Aegis({
  id: "random",
  reportApiSpeed: true, // 接口测速
  reportAssetSpeed: true, // 静态资源测速
  version: "1.4.1",
});

export const loginSuccess = () =>  {
  aegis.reportEvent({
    name: "login",
    ext1: "login-success",
    ext2: "webTUICallKit",
  });
};