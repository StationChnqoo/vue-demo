<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
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
  const used = new Set(
    playedCards.value.toUpperCase().replace(/\s+/g, "").split("")
  );
  return allRanks.filter((rank) => !used.has(rank)).join("");
});

const countUnsedCards = computed(() => {
  const total = props.isHawk ? 51 : 50;
  return (
    total +
    inCards.value.length -
    outCards.value.length -
    playedCards.value.length
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
        <n-input
          type="text"
          placeholder="请输入进贡"
          clearable
          v-model:value="outCards"
        />
      </n-input-group>
      <n-input-group style="flex: 1">
        <n-input-group-label>吃贡</n-input-group-label>
        <n-input
          type="text"
          placeholder="请输入吃贡"
          clearable
          v-model:value="inCards"
        />
      </n-input-group>
    </n-flex>
    <div style="height: 4px" />
    <n-input
      v-model:value="playedCards"
      type="textarea"
      placeholder="请输入手牌"
      rows="2"
      clearable
    />
  </div>
</template>

<style scoped>
.player {
  flex: 1;
}
</style>
