<script setup lang="ts">
import { useOP, useStep } from "../hooks";
const { step, increase } = useStep();
const { useAdd, useReduce } = useOP(increase);

import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import Child3 from "./Child3.vue";
</script>

<template>
  <div>
    <h2>父组件</h2>
    <Child1 v-if="step == 0" @on-next="useAdd" />
    <Child2 v-if="step == 1" @on-next="useAdd" @on-previous="useReduce" />
    <Child3 v-if="step == 2" @on-previous="useReduce" />
  </div>
</template>

<style scoped></style>
