<script setup lang="ts">
import { Button, Input } from "ant-design-vue";
import { ACTION } from "../constants";
const emits = defineEmits(["onPress"]);
</script>

<template>
  <div>
    <div><Input placeholder="请输入密码" /></div>
    <Button @click="emits('onPress', { action: ACTION.forgetPassword })">
      忘记密码
    </Button>
    <Button type="primary" @click="emits('onPress', { action: ACTION.next })"
      >下一步</Button
    >
  </div>
</template>

<style scoped></style>
