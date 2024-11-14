<script setup lang="ts">
import { useOP, useStep } from "../hooks";
const { step } = useStep();
const emits = defineEmits(["onPrevious", "onNext"]);
</script>

<template>
  <div>
    <h3>子组件2</h3>
    <button @click="emits('onPrevious')">Previous -> 1</button>
    <button @click="emits('onNext')">Next -> 3</button>
  </div>
</template>

<style scoped></style>
