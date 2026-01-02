<template>
  <section class="course_card">
    <div class="images">
      <img class="image" :src="image" alt="">
      <img class="typeimage" :src="typeImage" />
    </div>
    <div class="infos">
      <div class="title">{{ target?.title }}</div>
      <div class="sectitle">{{ target?.secTitle }}</div>
      <div class="date">开班日期： {{target?.startDate}}</div>
      <div class="tagbox">
        <div class="tag"></div>
        <div class="number">已有{{target?.vetifyNumber}}人报名</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const props = defineProps({
  target: {
    type: Object,
    required: true,
    default: () => { },
  },
})
const image = computed(() => {
  return new URL(`../../assets/${props?.target?.image}`, import.meta.url).href
})
const typeImage = computed(() => {
  return new URL(`../../assets/${props?.target?.type}`, import.meta.url).href
})
</script>
<style lang="scss" scoped>
.course_card{
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
  .images {
    position: relative;
    .image {
      border-radius: 4px 4px 0 0 ;
      width: 100%;
    }
    .typeimage {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 70px;
    }
  }
  .infos {
    padding: 14px;
    background-color: white;
    display: grid;
    row-gap: 10px;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    .sectitle {
      font-size: 16px;
      font-weight: 500;
    }
    .sectitle {
      font-size: 14px;

    }
    .date {
      margin-top: 20px;
    }
    .tagbox {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
