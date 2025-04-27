<script setup lang="ts">
// 这里可以加一些props，比如控制颜色、位置等等
</script>

<template>
  <div class="bubble">
    <slot />
    <!-- 插槽，展示动态传入的内容 -->
    <div class="triangle" />
  </div>
</template>

<style scoped>
.bubble {
  position: absolute;
  top: -44px;
  white-space: nowrap;
  display: inline-block;
  border-radius: 10px;
  padding: 4px 6px;
  border: 1px saddlebrown solid;
  background-color: #987123;
  color: white;

  .triangle {
    position: absolute;
    top: 100%;
    right: 10%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid saddlebrown;
  }
}
</style>
