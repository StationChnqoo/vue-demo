<script setup lang="ts">
import axios from "axios";
import { NInput, type DataTableColumns } from "naive-ui";
import type { RowData } from "naive-ui/es/data-table/src/interface";
import { h, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const loading = ref(false);
const route = useRoute();
const locale = ref("es");
const datas = ref<any[]>([]);

const tableColumns = ref<DataTableColumns<RowData>>([
  {
    title: "行业",
    key: "label",
    width: 160,
    resizable: false,
    render(rowData, rowIndex) {
      return rowData.label;
    },
  },
]);

const loadColumns = async () => {
  let result = await axios.get(
    "http://localhost:3000/api/mock/multiColumns?n=5"
  );
  let { columns, rows } = result.data.data;
  datas.value = rows;
  let index = columns.findIndex((it) => it.languageTag == locale.value);
  if (index >= 0) {
    [columns[0], columns[index]] = [columns[index], columns[0]];
  }
  columns = columns.sort((a, b) => a.status - b.status);
  tableColumns.value = [
    ...tableColumns.value,
    ...columns.map((it, i) => {
      return {
        title: () => {
          return [
            h("span", [
              h("span", {}, [
                h("span", { style: { color: "red" } }, "*"),
                h("span", {}, it.languageName),
              ]),
            ]),
            h("span", {}, it.languageName + "（已禁用）"),
          ][it.status];
        },
        key: it.languageTag,
        width: 200,
        resizable: false,
        render(rowData, rowIndex) {
          // console.log(rowData, it);
          let item = rowData.value.find((data) => data.name == it.languageTag);
          return i < 1
            ? item.value
            : h(NInput, {
                value: item.value,
                // status:
                //   it.status == 1 ? (item?.value ? null : "error") : "error",
                onUpdateValue(v) {},
              });
        },
      };
    }),
  ];
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
      :columns="tableColumns"
      :bordered="true"
      :single-line="false"
      flex-height
      striped
      :loading="loading"
      scroll-x="1080"
      :data="datas"
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
