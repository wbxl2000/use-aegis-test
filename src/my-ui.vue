<script lang="ts" setup>
import { loginSuccess } from './aegis';

function log() {
  loginSuccess(123);
}
</script>

<template>
  <!-- <button @click="loginSuccess(123)" > 1313 </button> -->
  <button @click="log()"> t </button>
</template>