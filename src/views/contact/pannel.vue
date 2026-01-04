<template>
  <section class="pannel">
    <div class="title">
      <div class="bar"></div>
      {{ info?.location }}校区地址
    </div>
    <div class="addr">
      <location_card v-for="(location, index) in info.addrs" :key="index" :target="location" />
    </div>
    <div v-if="info?.imags?.length" class="title">
      <div class="bar"></div>
      校区环境
    </div>
    <div class="images">
      <Images v-for="(img, index) in info.imags" :key="index" :target="img" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import location_card from './location_card.vue'
import Images from './image.vue'
const props = defineProps({
  info: {
    type: Object,
    required: true,
    default: () => {},
  },
})
</script>
<style lang="scss" scoped>
.pannel {
  flex: 1;
  background-color: white;
  border-radius: 6px;
  padding: 30px;
  .title {
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .bar {
      border-radius: 2px;
      width: 4px;
      height: 22px;
      margin-right: 10px;
      background-color: #00baff;
    }
  }
  .addr {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 20px;
  }
  .images {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
