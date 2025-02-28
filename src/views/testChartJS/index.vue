<script setup lang="ts">
import type { ChartConfiguration } from "chart.js";
import { Chart, registerables } from "chart.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
Chart.register(...registerables);

const chartCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(async () => {
  if (!chartCanvas.value) return;
  const params = JSON.parse(decodeURIComponent(route.query.data as string));
  const { labels, data } = params;
  const config: ChartConfiguration = {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "近一年资产净值 / K",
          data,
          borderWidth: 1,
          pointRadius: 2,
          pointHoverRadius: 4,
          borderColor: "#ff5252",
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
