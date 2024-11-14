import { ref } from "vue";
import { useStep } from "./useStep";

export function useOP(increase: any) {
  const useAdd = () => {
    increase(1);
  };
  const useReduce = () => {
    increase(-1);
  };
  return { useAdd, useReduce };
}
