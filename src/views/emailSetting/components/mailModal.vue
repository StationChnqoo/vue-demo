<script setup lang="ts">
import { PAGE } from "../constants";
import { useOP, useStep } from "../hooks";
import CheckCode4ResetMail from "./checkCode4ResetMail.vue";
import CheckCode4ResetPassword from "./checkCode4ResetPassword.vue";
import CheckPassword from "./checkPassword.vue";
import ResetMail from "./resetMail.vue";
import ResetPassword from "./resetPassword.vue";
import SelectMethod from "./selectMethod.vue";

const { page, stack, show, title } = useStep();
const { onSelectMethod, onPress } = useOP(stack, show, page);
const emits = defineEmits([""]);
</script>

<template>
  <div>
    <h3>弹窗 ...</h3>
    <h4>{{ title }}</h4>
    <SelectMethod
      v-if="page == PAGE.selectMothod"
      @on-select="onSelectMethod"
    />
    <CheckCode4ResetMail
      v-if="page == PAGE.checkCode4ResetMail"
      @on-press="onPress"
    />
    <CheckPassword v-if="page == PAGE.checkPassword" @on-press="onPress" />
    <ResetMail v-if="page == PAGE.resetMail" @on-press="onPress" />
    <ResetPassword v-if="page == PAGE.resetPassword" @on-press="onPress" />
    <CheckCode4ResetPassword
      v-if="page == PAGE.checkCode4ResetPassword"
      @on-press="onPress"
    />
  </div>
</template>

<style scoped></style>
