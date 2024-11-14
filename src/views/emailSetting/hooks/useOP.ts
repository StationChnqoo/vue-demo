import { ref, type Ref } from "vue";
import { useStep } from "./useStep";
import { ACTION, PAGE, PAGES, PageStack } from "../constants";

export function useOP(
  stack: Ref<PageStack>,
  show: Ref<boolean>,
  page: Ref<PAGE>
) {
  const onSelectMethod = (index: number) => {
    stack.value = new PageStack([PAGES.PASSWORD, PAGES.CODE][index], 1);
    page.value = stack.value.current();
  };
  const onPress = (e: { action: ACTION }) => {
    switch (e.action) {
      case ACTION.next:
        stack.value.next();
        break;
      case ACTION.completeResetMail:
        stack.value = new PageStack([PAGE.selectMothod], 0);
        break;
      case ACTION.completeResetPassword:
        stack.value = new PageStack([PAGE.selectMothod], 0);
        break;
      case ACTION.forgetPassword:
        stack.value = new PageStack(PAGES.FORGET, 1);
        break;
      default:
        break;
    }
    page.value = stack.value.current();
  };
  return { onSelectMethod, onPress };
}
