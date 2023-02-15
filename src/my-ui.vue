<script lang="ts" setup>
import { TUICallType } from "tuicall-engine-webrtc";
import Aegis from "aegis-web-sdk";

console.log(TUICallType);

const aegis = new Aegis({
  id: "iHWefAYqDNAiuxNMQZ",
  reportApiSpeed: true, // 接口测速
  reportAssetSpeed: true, // 静态资源测速
  version: "1.4.1",
});

function loginSuccess(SDKAppID: number) {
  aegis.reportEvent({
    name: "login",
    ext1: "login-success",
    ext2: "webTUICallKit",
    ext3: SDKAppID.toString()
  });
};
</script>

<template>
	<div @click="loginSuccess(123)"></div>
</template>