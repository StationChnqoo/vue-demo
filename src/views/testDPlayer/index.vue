<template>
  <div class="test-dplayer" ref="playerContainer" />
</template>

<script setup lang="ts">
import DPlayer from "dplayer";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Hls from "hls.js";

const route = useRoute();
const playerContainer = ref<HTMLDivElement | null>(null);
let player: DPlayer | null = null;

onMounted(() => {
  const src = route.query.src as string | undefined;
  if (src) {
    initPlayer(src);
  }
});

watch(
  () => route.query.src,
  (newSrc) => {
    const src = route.query.src as string;
    alert(src);
    if (newSrc && player) {
      // @ts-ignore
      player.switchVideo({
        url: src,
        type: src.endsWith(".m3u8") ? "hls" : "auto",
      });
      player.play();
    }
  }
);

onUnmounted(() => {
  if (player) {
    player.destroy();
    player = null;
  }
});

const initPlayer = (src: string) => {
  if (!playerContainer.value) return;

  player = new DPlayer({
    container: playerContainer.value,
    autoplay: true,
    video: {
      url: src,
      type: src.endsWith(".m3u8") ? "hls" : "auto",
      customType: {
        hls: (video: HTMLVideoElement, player: DPlayer) => {
          if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
          } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = src;
          } else {
            console.error("HLS.js is not supported.");
          }
        },
      },
    },
    theme: '#ca6924',
    contextmenu: [],
    playbackSpeed: [1, 1.5, 2],
    mutex: true,
    hotkey: true,
    volume: 1,
    preload: "auto",
    screenshot: true,
    highlight: [],
  });
  // @ts-ignore
  player.controller.hide = () => {}; // 禁止隐藏Controller
};
</script>

<style>
.test-dplayer {
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .dplayer-full {
    display: none !important;
  }
  .dplayer-full-in-icon {
    display: none !important;
  }
}
</style>
