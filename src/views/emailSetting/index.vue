<script setup lang="ts">
import MailModal from "./components/mailModal.vue";
</script>

<template>
  <div class="about">
    <MailModal />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
