<template>
  <section class="location_card">
   <div class="title">
    <img :src="addr" alt="">
    {{ target?.title }}</div>
   <div class="addr">{{ target?.addr }}</div>
   <div class="phone">咨询电话：{{ target?.phone }}</div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import addr from '@/assets/icon_campus.png'
const props = defineProps({
  target: {
    type: Object,
    required: true,
    default: () => {},
  },
})
</script>
<style lang="scss" scoped>
.location_card{
  background-color: #F5F6F9;
  padding: 20px;
  border-radius: 8px;
  display: grid;
  row-gap: 10px;
  .title {
    font-size: 14px;
    font-weight: 600;
    color: black;
    img{
      width: 14px;
      height: 14px;
    }
  }
  .addr,.phone {
    font-size: 12px;
    font-weight: 500;
    color: #3A3D4B;
    line-height: 20px;
  }
}
</style>
