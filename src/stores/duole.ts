import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useDuoleStore = defineStore(
  "duole",
  () => {
    const defaultGame = ref("gouji");
    const isHawk = ref(false);
    return { defaultGame, isHawk };
  },
  {
    persist: true,
  }
);
