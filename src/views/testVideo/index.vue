<template>
  <div class="player-container">
    <video ref="videoRef" controls crossorigin="anonymous" playsinline />
  </div>
</template>

<script setup lang="ts">
import Hls from "hls.js"; // 手动引入 HLS.js
import Plyr from "plyr";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const videoRef = ref<HTMLVideoElement | null>(null);
let player: Plyr | null = null;
let hls: Hls | null = null;

onMounted(() => {
  if (!videoRef.value) return;
  player = new Plyr(videoRef.value, { autoplay: true });
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
  if (hls) {
    hls.destroy();
    hls = null;
  }
});

const loadVideo = (src: string) => {
  if (!videoRef.value) return;

  // 判断是否为 HLS（m3u8）
  if (src.endsWith(".m3u8")) {
    if (Hls.isSupported()) {
      if (hls) {
        hls.destroy();
      }
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.value);
    } else if (videoRef.value.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari 原生支持 HLS
      videoRef.value.src = src;
    } else {
      console.error("HLS.js 不支持当前浏览器");
    }
  } else {
    // 普通视频格式（MP4）
    videoRef.value.src = src;
  }
  videoRef.value.load();
};
</script>

<style scoped>
.player-container {
  width: 100vw;
  margin: auto;
  height: 100vh;
  background: black;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow-y: hidden;
}

video {
  display: block;
  width: 100vw;
  margin: auto;
}
</style>
