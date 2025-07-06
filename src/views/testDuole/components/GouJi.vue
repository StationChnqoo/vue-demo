<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { parseCardInput } from "../constants";
import Player from "./Player.vue";

const route = useRoute();
const isHawk = ref(route.query.isHawk == "1"); // 带鹰模式
const myBigCards = ref(""); // 我手里的大牌
const otherBigCards = ref(""); // 外面已经出的大牌

const players = ref(
  ["对家", "上家", "下家"].map((it, i) => ({
    name: it,
    cards: "",
  }))
);

const onPlayersInput = (index: number, cards: string) => {
  console.log(index, cards);
};

const sum = computed(() => {
  return isHawk.value ? 51 : 50;
});

const unusedBigCards = computed(() => {
  let hawks = isHawk.value ? "Y".repeat(6) : "";
  let allBigCards = hawks + "D".repeat(6) + "X".repeat(6);

  // ✅ 使用 parseCardInput 来解析输入
  const used =
    parseCardInput(myBigCards.value) + parseCardInput(otherBigCards.value);

  const count = (s: string) => {
    const map = new Map<string, number>();
    for (const ch of s) {
      map.set(ch, (map.get(ch) || 0) + 1);
    }
    return map;
  };
  const totalCount = count(allBigCards);
  const usedCount = count(used);
  for (const [ch, num] of usedCount.entries()) {
    totalCount.set(ch, Math.max((totalCount.get(ch) || 0) - num, 0));
  }
  let result = "";
  for (const [ch, num] of totalCount.entries()) {
    result += ch.repeat(num);
  }
  return "剩余的大牌：\n" + result;
});

onMounted(() => {
  document.title = "多乐够级记牌器";
});
</script>

<template>
  <div class="gj">
    <div class="players">
      <div style="flex: 1">
        <div>游戏设置</div>
        <n-checkbox v-model:checked="isHawk" label="是否带鹰 🦅" />
        <div style="height: 10px" />
        <n-input
          :value="unusedBigCards"
          type="textarea"
          placeholder=""
          rows="3"
          disabled
          size="small"
        />
      </div>
      <div style="width: 24px" />
      <Player
        :player="players[0]"
        :sum="sum"
        @input="(e) => onPlayersInput(0, e)"
      />
    </div>
    <div style="height: 16px" />
    <div class="players">
      <Player
        :player="players[1]"
        :sum="sum"
        @input="(e) => onPlayersInput(1, e)"
      />
      <div style="width: 24px" />
      <Player
        :player="players[2]"
        :sum="sum"
        @input="(e) => onPlayersInput(2, e)"
      />
    </div>
    <div style="height: 24px" />
    <div class="players">
      <div style="flex: 1">
        <div>我的主要手牌（鹰Y、大小王DX）</div>
        <n-input v-model:value="myBigCards" placeholder="请输入手牌" />
      </div>
      <div style="width: 24px" />
      <div style="flex: 1">
        <div>外面的主要大牌（鹰Y、大小王DX）</div>
        <n-input v-model:value="otherBigCards" placeholder="请输入手牌" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gj {
  .players {
    display: flex;
  }
}
</style>
