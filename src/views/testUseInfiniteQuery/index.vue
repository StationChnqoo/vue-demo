<script setup lang="ts">
import { useInfiniteQuery, useQueryClient } from "@tanstack/vue-query";
import axios from "axios";
import { onMounted } from "vue";
const queryClient = useQueryClient();

onMounted(() => {
  // loadDatas();
});

const reload = async () => {
  queryClient.removeQueries({
    queryKey: ["myQuery"],
    exact: true,
  });
  myQuery.refetch();
};

const loadDatas = async (page: number) => {
  let result = await axios.get("https://service.cctv3.net/api/testMongo", {
    params: { current: page, pageSize: 10 },
  });
  // datas.value = result.data.data;
  return result.data;
};

const myQuery = useInfiniteQuery({
  initialPageParam: { page: 1 },
  queryKey: ["myQuery"],
  queryFn: (params) => loadDatas(params.pageParam.page),
  getNextPageParam: (lastPage, pages) => {
    // console.log("getNextPageParam: ", { lastPage, pages });
    return { page: lastPage.current + 1 };
  },
});

// const datas = myQuery.data.value?.pages.map((it) => it.data).flat() || [];
</script>

<template>
  <div class="infinite-query">
    <n-flex vertical :align="'center'">
      <div class="items">
        <div
          v-for="(item, index) in myQuery.data.value?.pages
            .map((it) => it.data)
            .flat() || []"
          :key="item._id"
        >
          <div>{{ index + 1 }}.{{ item.title }}</div>
        </div>
        <n-spin v-if="myQuery.isFetching.value" style="margin: 12px 0" />
      </div>
      <div style="height: 12px" />
      <n-flex :align="'center'" :justify="'space-between'" style="width: 360px">
        <div>Current: {{ myQuery.data.value?.pageParams.pop() }}</div>
        <n-flex :justify="'center'">
          <n-button @click="reload">重置</n-button>
          <n-button
            type="primary"
            @click="myQuery.fetchNextPage()"
            :loading="myQuery.isFetching.value"
            >下一页</n-button
          >
        </n-flex>
      </n-flex>
    </n-flex>
  </div>
</template>

<style scoped>
.infinite-query {
  min-height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  .items {
    width: 360px;
    height: 480px;
    overflow-y: scroll;
    border-radius: 12px;
    border: 1px burlywood solid;
    flex-direction: column;
    display: flex;
    padding: 0 4px;
    .item {
      padding: 0 12px;
      margin: 1px 0px;
      &:hover {
        border: 1px burlywood solid;
        border-radius: 4px;
      }
    }
  }
}
</style>
