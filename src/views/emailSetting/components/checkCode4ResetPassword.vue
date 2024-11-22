<script setup lang="ts">
import { ACTION } from "../constants";
const emits = defineEmits(["onPress"]);
</script>

<template>
  <div>
    <div>
      <n-input placeholder="请输入邮箱" /><Input placeholder="请输入验证码" />
    </div>
    <n-button type="primary" @click="emits('onPress', { action: ACTION.next })"
      >下一步</n-button
    >
  </div>
</template>

<style scoped></style>
