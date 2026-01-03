<template>
  <section class="hot_course">
   <div class="title">
    <img :src="Hot" alt="">
    <span><span class="red">热门</span>课程</span>
   </div>
  <hot_card v-for="(source,index) in courses?.splice(0,6)" :key="index" :target="source" />
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { courses } from './datas';
import Hot from '@/assets/hot.png'
import hot_card from './hot_card.vue';
</script>
<style lang="scss" scoped>
.hot_course{
  background-color: white;
  border-radius: 10px;
  padding:30px;
  width: fit-content;
  width: 320px;
  .title {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    column-gap: 4px;
    margin-bottom: 20px;
    .red {
      color: red;
    }
  }
}
</style>
