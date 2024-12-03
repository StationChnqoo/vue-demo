<script setup lang="ts">
import { RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
</script>

<template>
  <n-flex :justify="'space-around'" :wrap="false">
    <n-flex :justify="'center'" :align="'center'">
      <RouterView />
    </n-flex>
  </n-flex>
</template>

<style scoped></style>
