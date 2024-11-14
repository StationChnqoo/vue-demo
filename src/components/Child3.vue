<script setup lang="ts">
import { useOP, useStep } from "../hooks";
const { step } = useStep();
const emits = defineEmits(["onPrevious"]);
</script>

<template>
  <div>
    <h3>子组件3</h3>
    <button @click="emits('onPrevious')">Previous -> 2</button>
  </div>
</template>

<style scoped></style>
