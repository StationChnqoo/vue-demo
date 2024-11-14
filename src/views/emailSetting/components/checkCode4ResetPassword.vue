<script setup lang="ts">
import { Button, Input } from "ant-design-vue";
import { ACTION } from "../constants";
const emits = defineEmits(["onPress"]);
</script>

<template>
  <div>
    <div>
      <Input placeholder="请输入邮箱" /><Input placeholder="请输入验证码" />
    </div>
    <Button type="primary" @click="emits('onPress', { action: ACTION.next })"
      >下一步</Button
    >
  </div>
</template>

<style scoped></style>
