<template>
  <div class="aggrement">
    <div v-html="html" />
    <div ref="lastElement" style="height: 16px" />
  </div>
</template>

<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { onMounted, ref, watch } from "vue";

const html = ref("<div />");
const props = defineProps(["file"]);
const isLoaded = ref(false);
const isAlreadyReaded = ref(false);

onMounted(() => {
  fetch(`/docs/${props.file}`)
    .then((response) => response.text())
    .then((text) => {
      html.value = text;
      setTimeout(() => {
        isLoaded.value = true;
      }, 1000);
    });
});

const lastElement = ref();
const targetIsVisible = useElementVisibility(lastElement);
const emits = defineEmits(["onReadEnd"]);

watch([targetIsVisible, isLoaded], ([visible, loaded]) => {
  if (!isAlreadyReaded.value && visible && loaded) {
    isAlreadyReaded.value = true;
  }
});

watch(isAlreadyReaded, (iar) => {
  emits("onReadEnd", iar);
});
</script>
<style lang="scss" scoped>
.aggrement {
  .section {
  }
}
</style>
