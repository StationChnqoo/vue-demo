<script setup lang="ts">
import { onMounted, ref } from "vue";
import HTMLer from "./HTLMer.vue";

const checked = ref(false);
const isCouldNext = ref(false);

onMounted(() => {});
</script>

<template>
  <div class="page">
    <HTMLer />
    <div style="height: 24px" />
    <div class="bottom">
      <n-checkbox v-model:checked="checked" label="我同意上述条款" />
      <n-button :disabled="!isCouldNext" type="primary">提交</n-button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .page {
    min-height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    .bottom {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
