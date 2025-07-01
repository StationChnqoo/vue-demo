<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { parseCardInput } from "../constants";
const inCards = ref(""); // 吃贡
const outCards = ref(""); // 进贡

const props = defineProps(["player", "isHawk"]);

const allRanks = [
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "J",
  "Q",
  "K",
  "A",
  "2",
];
const playedCards = ref("");

const remainingRanks = computed(() => {
  // 替换输入格式：如 "3J 50 7K 8A"
  const groups = playedCards.value.toUpperCase().trim().split(/\s+/);
  const used = new Set<string>();
  for (const group of groups) {
    const card = group.slice(-1); // 每组最后一个字符为牌名
    if (allRanks.includes(card)) {
      used.add(card);
    }
  }
  return allRanks.filter((rank) => !used.has(rank)).join("");
});

const playedPercent = computed(() => {
  return (countUnsedCards.value / 51) * 100;
});

const countUnsedCards = computed(() => {
  const total = props.isHawk ? 51 : 50;
  return (
    total +
    inCards.value.length -
    outCards.value.length -
    parseCardInput(playedCards.value).length
  );
});
</script>

<template>
  <div class="player">
    <n-flex :justify="'space-between'">
      <div style="color: #666">
        {{ `${props.player.name}: ` }}{{ remainingRanks }}
      </div>
      <div style="color: #ff5252">
        {{ `${countUnsedCards}张` }}
      </div></n-flex
    >
    <div style="height: 4px" />
    <n-flex>
      <n-input-group style="flex: 1">
        <n-input-group-label>进贡</n-input-group-label>
        <n-input type="text" placeholder="" v-model:value="outCards" />
      </n-input-group>
      <n-input-group style="flex: 1">
        <n-input-group-label>吃贡</n-input-group-label>
        <n-input type="text" placeholder="" v-model:value="inCards" />
      </n-input-group>
    </n-flex>
    <div style="height: 4px" />
    <n-progress
      type="line"
      :percentage="playedPercent"
      :show-indicator="false"
      status="success"
    />
    <div style="height: 4px" />
    <n-input
      v-model:value="playedCards"
      type="textarea"
      placeholder="请输入手牌"
      rows="2"
      size="small"
    />
  </div>
</template>

<style scoped>
.player {
  flex: 1;
}
</style>
