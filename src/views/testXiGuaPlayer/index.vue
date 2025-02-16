<template>
  <div class="test-xg">
    <video
      ref="videoRef"
      class="xgplayer"
      playsinline
      crossorigin="anonymous"
    />
  </div>
</template>

<script setup lang="ts">
import Player from "xgplayer";
import HlsPlugin from "xgplayer-hls";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const videoRef = ref<HTMLVideoElement | null>(null);
let player: Player | null = null;

onMounted(() => {
  if (!videoRef.value) return;
  const src = route.query.src as string | undefined;
  if (src) {
    loadVideo(src);
  }
});

watch(
  () => route.query.src,
  (newSrc) => {
    if (newSrc) {
      loadVideo(newSrc as string);
    }
  }
);

onUnmounted(() => {
  if (player) {
    player.destroy();
    player = null;
  }
});

const loadVideo = (src: string) => {
  if (!videoRef.value) return;

  if (player) {
    player.destroy();
    player = null;
  }

  player = new Player({
    el: videoRef.value,
    url: src,
    autoplay: true,
    playsinline: true,
    lang: "zh-cn",
    fluid: true,
    videoFillMode: "contain", // 防止溢出
    controls: true,
    plugins: [HlsPlugin],
    cssFullscreen: false, // 允许 CSS 全屏
    screenShot: true, // 允许截图
    playbackRate: [1, 1.5, 2], // 倍速
  });
};
</script>

<style>
.test-xg {
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
}
</style>
