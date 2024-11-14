<script setup lang="ts">
import { ACTION } from "../constants";

const emits = defineEmits(["onPress"]);
</script>

<template>
  <div>
    <div>
      <input placeholder="请输入密码" /><input placeholder="请输入验证码" />
    </div>
    <button @click="emits('onPress', { action: ACTION.completeResetPassword })">
      完成
    </button>
  </div>
</template>

<style scoped></style>
