<script setup lang="ts">
import { keepPreviousData, useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { onMounted, ref } from "vue";

const checked = ref(false);
const page = ref(1);

onMounted(() => {});

const loadDatas = async (p: number) => {
  let result = await axios.get("https://service.cctv3.net/api/testMongo", {
    params: { current: p, pageSize: 10 },
  });
  return result.data.data;
};

const myQuery = useQuery({
  // enabled: checked,
  queryKey: ["myQuery", page],
  queryFn: ({ queryKey }) => loadDatas(page.value),
  placeholderData: keepPreviousData,
});
</script>

<template>
  <div class="test-use-query-pager">
    <n-flex vertical align="center">
      <div>
        <n-flex vertical align="center">
          <div
            v-for="(item, index) in myQuery.data.value"
            :key="index"
            style="text-align: center; font-weight: 500"
          >
            {{ index + 1 }}. {{ item.title }}
          </div>
        </n-flex>
      </div>
      <n-flex>
        <div>状态：</div>
        <n-switch v-model:value="checked" />
      </n-flex>
      <n-flex align="center">
        <n-button @click="page -= 1">上一页</n-button>
        <div>Current --> {{ page }}</div>
        <n-button @click="page += 1">下一页</n-button></n-flex
      >
    </n-flex>
  </div>
</template>

<style>
.test-use-query-pager {
  min-height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  .bottom {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>
