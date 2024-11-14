<script setup lang="ts">
import { Button } from "ant-design-vue";

const emits = defineEmits(["onSelect"]);
</script>

<template>
  <div>
    <Button type="default" @click="emits('onSelect', 0)">密码</Button>
    <Button type="primary" @click="emits('onSelect', 1)">邮箱验证码</Button>
  </div>
</template>

<style scoped></style>
