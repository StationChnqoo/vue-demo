<script setup lang="ts">
import { ref } from "vue";
import HTMLViewer from "./components/HTMLViewer.vue";
const agree = ref(false);
const readed = ref(false);
</script>

<template>
  <div class="web-capture">
    <div class="mobile">
      <iframe
        src="https://cctv3.net"
        width="100%"
        height="100%"
        style="border: none"
      />
    </div>
  </div>
</template>

<style>
.web-capture {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  .mobile {
    transform: scale(0.8);
    width: 375px;
    height: 667px;
  }
}
</style>
