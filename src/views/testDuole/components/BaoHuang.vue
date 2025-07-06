<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Player from "./Player.vue";

const route = useRoute();
const game = ref("wfbh");

const options = [
  { label: "潍坊保皇（炸弹💣场）", value: "wfbh", sum: 40 },
  { label: "疯狂保皇（炸弹💣场）", value: "fkbh", sum: 30 },
];

const sum = computed(() => {
  let item = options.find((it) => it.value == game.value);
  return item?.sum;
});

const players = ref(
  ["上联", "上家", "下家", "下联"].map((it, i) => ({
    name: it,
    cards: "",
  }))
);

const onPlayersInput = (index: number, cards: string) => {
  console.log(index, cards);
};

onMounted(() => {
  document.title = "多乐够级记牌器";
});
</script>

<template>
  <div class="duole-bh">
    <n-flex justify="space-between" align="center">
      <div>游戏玩法：</div>
      <div style="width: 258px">
        <n-select v-model:value="game" :options="options" />
      </div>
    </n-flex>
    <div style="height: 16px" />
    <div class="players">
      <Player
        :player="players[0]"
        :sum="sum"
        @input="(e) => onPlayersInput(0, e)"
      />
      <div style="width: 24px" />
      <Player
        :player="players[3]"
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
  </div>
</template>

<style scoped>
.duole-bh {
  .players {
    display: flex;
  }
}
</style>
