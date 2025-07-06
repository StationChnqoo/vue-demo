<script setup lang="ts">
import { useDuoleStore } from "@/stores/duole";
const duoleStore = useDuoleStore();
</script>

<template>
  <div class="duole-my">
    <n-flex justify="space-between" align="center">
      <div>默认游戏</div>
      <n-radio-group v-model:value="duoleStore.defaultGame" name="defaultGame">
        <n-space>
          <n-radio value="gj">多乐够级</n-radio>
          <n-radio value="bh">多乐保皇</n-radio>
        </n-space>
      </n-radio-group>
    </n-flex>
  </div>
</template>

<style scoped>
.duole-my {
  flex: 1;
}
</style>
