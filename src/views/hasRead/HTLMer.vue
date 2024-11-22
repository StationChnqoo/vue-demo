<script setup lang="ts">
import { onMounted, ref } from "vue";

const content = ref("");
const init = async () => {
  fetch("/docs/testReadHTML.html")
    .then((response) => response.text())
    .then((html) => {
      content.value = html;
    });
};

onMounted(() => {
  init();
});
</script>

<template>
  <div class="html-container">
    <div v-html="content" />
    <div style="height: 16px" />
  </div>
</template>

<style scoped>
.html-container {
  height: calc(33vh);
  overflow-y: scroll;
  background-color: #eee;
}
</style>
