<script setup lang="ts">
const emits = defineEmits(["onSelect"]);
</script>

<template>
  <div>
    <n-button type="default" @click="emits('onSelect', 0)">密码</n-button>
    <n-button type="primary" @click="emits('onSelect', 1)">邮箱验证码</n-button>
  </div>
</template>

<style scoped></style>
