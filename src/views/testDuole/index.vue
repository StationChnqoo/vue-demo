<script setup lang="ts">
import { useDuoleStore } from "@/stores/duole";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BaoHuang from "./components/BaoHuang.vue";
import GouJi from "./components/GouJi.vue";
import My from "./components/My.vue";

const duoleStore = useDuoleStore();

const route = useRoute();
const tab = ref("gj");

onMounted(() => {
  document.title = "多乐游戏";
  tab.value = duoleStore.defaultGame || "gj"; // 默认选中多乐够级
});
</script>

<template>
  <div class="duole">
    <n-tabs type="line" animated v-model:value="tab">
      <n-tab-pane name="gj" tab="多乐够级"><GouJi /></n-tab-pane>
      <n-tab-pane name="bh" tab="多乐保皇"><BaoHuang /> </n-tab-pane>
      <n-tab-pane name="my" tab="个人中心"><My /> </n-tab-pane>
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
