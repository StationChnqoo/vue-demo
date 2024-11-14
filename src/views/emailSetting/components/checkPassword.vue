<script setup lang="ts">
import { ACTION } from "../constants";
const emits = defineEmits(["onPress"]);
</script>

<template>
  <div>
    <div><input placeholder="请输入密码" /></div>
    <button @click="emits('onPress', { action: ACTION.forgetPassword })">
      忘记密码
    </button>
    <button @click="emits('onPress', { action: ACTION.next })">下一步</button>
  </div>
</template>

<style scoped></style>
