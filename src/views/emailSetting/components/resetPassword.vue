<script setup lang="ts">
import { ACTION } from "../constants";

const emits = defineEmits(["onPress"]);
</script>

<template>
  <div>
    <div>
      <n-input placeholder="请输入密码" /><Input placeholder="请输入验证码" />
    </div>
    <n-button
      type="primary"
      @click="emits('onPress', { action: ACTION.completeResetPassword })"
    >
      完成
    </n-button>
  </div>
</template>

<style scoped></style>
