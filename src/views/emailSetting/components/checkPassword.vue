<script setup lang="ts">
import { ACTION } from "../constants";
const emits = defineEmits(["onPress"]);
</script>

<template>
  <div>
    <div><n-input placeholder="请输入密码" /></div>
    <n-button @click="emits('onPress', { action: ACTION.forgetPassword })">
      忘记密码
    </n-button>
    <n-button type="primary" @click="emits('onPress', { action: ACTION.next })"
      >下一步</n-button
    >
  </div>
</template>

<style scoped></style>
