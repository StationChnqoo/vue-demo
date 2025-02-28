<script setup lang="ts">
import axios from "axios";
import type { DataTableColumns } from "naive-ui";
import type { RowData } from "naive-ui/es/data-table/src/interface";
import { h, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const loading = ref(false);
const route = useRoute();
const locale = ref("es");
const columns = ref<DataTableColumns<RowData>>([
  {
    title: "id",
    key: "id",
    width: 100,
    resizable: false,
    render(rowData, rowIndex) {
      return "--";
    },
  },
]);

const loadColumns = async () => {
  let result = await axios.get(
    "http://localhost:3000/api/mock/multiColumns?n=5"
  );
  let index = result.data.data.findIndex((it) => it.languageTag == locale);
  let _datas = [...result.data.data];
  let t = _datas[0];
  _datas[0] = _datas[index];
  _datas[index] = t;
  columns.value = [
    ...columns.value,
    ..._datas.map((it, i) => {
      console.log(it);
      return {
        title: it.languageName,
        key: it.languageTag,
        width: 100,
        resizable: false,
        render(rowData, rowIndex) {
          return "--";
        },
      };
    }),
  ];
  console.log("columns: ", columns.value);
};

onMounted(() => {
  loadColumns();
});
</script>

<template>
  <div class="test-multi-columns">
    <n-data-table
      size="small"
      remote
      :columns="columns"
      :bordered="true"
      :single-line="false"
      flex-height
      striped
      :loading="loading"
      scroll-x="1080"
      :data="[]"
      style="height: calc(100vh)"
      :pagination="undefined"
    />
  </div>
</template>

<style scoped>
.test-multi-columns {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
}
</style>
