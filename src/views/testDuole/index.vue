<script setup lang="ts">
import { onMounted, ref } from "vue";
import GouJi from "./components/GouJi.vue";
import BaoHuang from "./components/BaoHuang.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const tab = ref("gj");

onMounted(() => {
  document.title = "多乐游戏";
});
</script>

<template>
  <div class="duole">
    <n-tabs type="line" animated v-model:value="tab">
      <n-tab-pane name="gj" tab="多乐够级"><GouJi /></n-tab-pane>
      <n-tab-pane name="bh" tab="多乐保皇"><BaoHuang /> </n-tab-pane>
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
