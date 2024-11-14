<script setup lang="ts">
import { useOP, useStep } from "../hooks";
const { step } = useStep();
const emits = defineEmits(["onNext"]);
</script>

<template>
  <div>
    <h3>子组件1</h3>
    <button @click="emits('onNext')">Next -> 2</button>
  </div>
</template>

<style scoped></style>
