<script setup lang="ts">
import { ref } from "vue";
import HTMLViewer from "./components/HTMLViewer.vue";
const agree = ref(false);
const readed = ref(false);
</script>

<template>
  <div class="hasRead">
    <div class="content">
      <HTMLViewer file="hasReadHTML.html" @on-read-end="(t) => (readed = t)" />
    </div>
    <div style="height: 24px" />
    <div class="bottom">
      <n-checkbox v-model:checked="agree" label="我同意" />
      <n-button :disabled="!(agree && readed)" type="primary">下一步</n-button>
    </div>
  </div>
</template>

<style>
.hasRead {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  .content {
    height: calc(33vh);
    overflow-y: scroll;
  }
  .bottom {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>
