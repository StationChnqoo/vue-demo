<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Chart, registerables } from "chart.js";
import type { ChartConfiguration } from "chart.js";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
Chart.register(...registerables);

const chartCanvas = ref<HTMLCanvasElement | null>(null);
const token = ref("");
const loadDatas = async (token: string) => {
  let instance = axios.create({
    baseURL: "http://110.42.253.75:7573",
    headers: { token, "Content-Type": "application/json" },
  });
  let result = await instance.get("/selectProperties.do", {
    params: {
      currentPage: 1,
      pageSize: 52,
    },
    withCredentials: true
  });
  return result.data.data;
};

onMounted(async () => {
  if (!chartCanvas.value) return;
  const token = route.query.token as string | undefined;
  debugger;
  let datas = await loadDatas(token!);
  const config: ChartConfiguration = {
    type: "line", // 图表类型
    data: {
      labels: [
        "Addas",
        "Bdasda",
        "Casdasa",
        "Dadaasas",
        "Addas",
        "Bdasda",
        "Casdasa",
        "Dadaasas",
      ],
      datasets: [
        {
          label: "示例数据",
          data: [10, 20, 30, 40, 10, 20, 30, 40],
          // backgroundColor: ["red", "blue", "green", "purple"],
        },
      ],
    },
    options: {
      responsive: true,
    },
  };

  new Chart(
    chartCanvas.value.getContext("2d") as CanvasRenderingContext2D,
    config
  );
});
</script>

<template>
  <div id="app" class="test-chartjs">
    <canvas ref="chartCanvas" class="chart" />
  </div>
</template>

<style>
.test-chartjs {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .chart {
    height: 100%;
    width: 100%;
  }
}
</style>
