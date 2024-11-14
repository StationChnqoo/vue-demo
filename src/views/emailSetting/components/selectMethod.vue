<script setup lang="ts">
const emits = defineEmits(["onSelect"]);
</script>

<template>
  <div>
    <button @click="emits('onSelect', 0)">密码</button>
    <button @click="emits('onSelect', 1)">邮箱验证码</button>
  </div>
</template>

<style scoped></style>
