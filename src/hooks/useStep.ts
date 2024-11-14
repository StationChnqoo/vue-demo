import { ref } from "vue";

export function useStep() {
  let step = ref(0);
  const increase = (n: number) => {
    step.value += n;
  };
  return { step, increase };
}