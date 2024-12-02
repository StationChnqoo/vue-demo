<script setup lang="ts">
import { onMounted, ref } from "vue";
const options = ref<any[]>([]);
const value = ref<string[]>([]);

const loadDatas = async () => {
  let datas = [] as any[];
  fetch("https://service.cctv3.net/api/oil/selectTree")
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data);
      for (let i = 0; i < result.data.length; i++) {
        let item = result.data[i];
        for (let j = 0; j < item.children.length; j++) {
          let it = item.children[j];
          if (it.blockType == 1) {
            datas.push({ label: it.blockName, value: it.id, children: [] });
          }
        }
      }
      console.log(datas);
      options.value = datas;
    });
};
onMounted(() => {
  loadDatas();
});
</script>

<template>
  <div class="about">
    <n-cascader
      v-model:value="value"
      :options="options"
      placeholder="Please select"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
