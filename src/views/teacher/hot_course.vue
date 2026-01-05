<template>
  <section class="hot_course">
    <div class="title">
      <img :src="Hot" alt="" />
      <span><span class="red">热门</span>课程</span>
    </div>
    <hot_card v-for="(source, index) in courselists" :key="index" :target="source" />
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { courses } from './datas'
import Hot from '@/assets/hot.png'
import hot_card from './hot_card.vue'
import { cloneDeep } from 'lodash-es'
const courselists = computed(() => {
  const list = cloneDeep(courses);
  return list?.splice(0, 6)
})
</script>
<style lang="scss" scoped>
.hot_course {
  border-radius: 10px;
  padding: 20px 20px;
  width: fit-content;
  width: 320px;
  height: fit-content;
  background: linear-gradient(to bottom, #ffd9d9 0%, #ffffff 15%);
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
