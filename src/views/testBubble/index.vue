<script setup lang="ts">
import { onMounted, ref } from "vue";
import Bubble from "./components/bubble.vue";

onMounted(() => {});
</script>

<template>
  <div class="bubble-page">
    <n-flex>
      <n-button>1</n-button>
      <div class="container">
        <n-button>2</n-button>
        <bubble>
          <div>你是真的6啊兄弟</div>
        </bubble>
      </div>
      <n-button>3</n-button>
    </n-flex>
  </div>
</template>

<style scoped>
.bubble-page {
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: visible;
  }
}
</style>
