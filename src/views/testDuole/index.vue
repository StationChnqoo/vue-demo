<script setup lang="ts">
import { onMounted } from "vue";
import GouJi from "./components/GouJi.vue";

onMounted(() => {
  document.title = "多乐游戏";
});
</script>

<template>
  <div class="duole">
    <n-tabs type="line" animated>
      <n-tab-pane name="gj" tab="多乐够级"><GouJi /></n-tab-pane>
      <n-tab-pane name="bh" tab="多乐保皇"><div>敬请期待 ~</div> </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped>
.duole {
  padding: 12px 32px;
  .players {
    display: flex;
  }
}
</style>
