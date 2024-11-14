import { ref, watch } from "vue";
import { PAGE, PageStack } from "../constants";

export function useStep() {
  const stack = ref<PageStack>(new PageStack([], 0));
  const page = ref<PAGE>(PAGE.selectMothod);
  const show = ref(false);
  const title = ref("选择认证方式");

  watch(
    () => page.value,
    (p) => {
      switch (p) {
        case PAGE.checkCode4ResetPassword:
        case PAGE.checkCode4ResetMail:
          title.value = "验证邮箱";
          break;
        case PAGE.resetMail:
          title.value = "重置邮箱";
          break;
        case PAGE.selectMothod:
          title.value = "选择认证方式";
          break;
        case PAGE.checkPassword:
          title.value = "验证密码";
          break;
        case PAGE.resetPassword:
          title.value = "重置密码";
          break;
        default:
          break;
      }
    }
  );

  const setShow = (s: boolean) => {
    show.value = s;
  };
  const setStack = (s: PageStack) => {
    stack.value = s;
  };
  return { stack, setStack, show, setShow, page, title };
}
