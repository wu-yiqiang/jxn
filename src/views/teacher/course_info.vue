<template>
  <section class='CourseInfo'>
    <div class="leftbox">
      <img class="course" :src="image" alt="">
      <img class="type" :src="typeImage" />
    </div>
    <div class="rightbox">
      <div class="title">{{ target?.title }}</div>
      <div class="sectitle"> {{ target?.secTitle }}</div>
      <div class="tag">{{ target?.location?.join(',') }}</div>
      <span class="number">已有{{target?.vetifyNumber}}人报名</span>
       <div class="submit">
        <div class="btn">立即报名</div>
      </div>
      </div>
     
  </section>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { subjectType } from './datas';
import userlogo from '@/assets/classmates.png'
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
  let str = ''
  if (props?.target?.type === subjectType.GGK) str = 'course_center_ggk.png'
  if (props?.target?.type === subjectType.ZYK) str = 'course_center_zyk.png'
  return new URL(`../../assets/${str}`, import.meta.url).href
})
</script>
<style scoped lang='scss'>
.CourseInfo {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  height: fit-content;
  column-gap: 30px;
  height: 400px;
  .leftbox {
    position: relative;

    .course {
      height: 100%;
    }

    .type {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 80px;
    }
  }

  .rightbox {
    flex: 1;

    .title {
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 500;
    }

    .sectitle {
      font-size: 14px;
      margin-bottom: 40px;
      line-height: 20px;
    }
    .tag {
      padding: 8px;
      border-radius: 4px;
      background-color: #E1F7FF;
      color: #00BAFF;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      width: fit-content;
    }
    .year {
      margin: 10px 0;
      font-size: 14px;
      color: grey;
      display: flex;
      align-items: center;
    }
    .number {
      margin-top: 20px;
          font-size: 14px;
          color: gray;
          display: flex;
        }
    .submit {
      display: flex;
      justify-content: end;
      margin-top: 60px;
       .btn {
          width: 160px;
          padding: 10px 0;
          background-color: #00baff;
          border: none;
          border-radius: 30px;
          color: white;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          display: grid;
          place-content: center;
        }
    }
  }
}
</style>