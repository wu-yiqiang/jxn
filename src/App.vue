<script setup lang="ts">
import Rebot from '@/views/ai/aibot.vue'
import router from './router';
</script>

<template>
  <div class="start">
    <RouterView />
    <div class="rebot">
      <Rebot v-if="!['/ai', '/login'].includes(router.currentRoute.value.path)" />
    </div>
  </div>

</template>
<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  .start {
    height: 100vh;
    .rebot {
      position: fixed;
      right: 0;
      bottom: 0;
      z-index: 99999999;
    }
  }
}
</style>
