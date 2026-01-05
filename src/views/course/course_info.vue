<template>
  <section class='CourseInfo'>
    <div class="leftbox">
      <img class="course" :src="image" alt="">
      <img class="type" :src="typeImage" />
    </div>
    <div class="rightbox">
      <div class="title">{{ target?.title }}</div>
      <div class="sectitle"> {{ target?.secTitle }}</div>
      <div class="year">考试年份：{{ target?.year }}</div>
      <div class="year">班级容量：敬请期待</div>
      <div class="year">开班日期：{{ target?.startDate }}</div>
      <div class="year">上课事件：敬请期待</div>
      <div class="year">上课地点：<div v-if="!target?.location?.length" class="empty">暂无</div>
      </div>
      <div class="submit">
        <div class="images">
          <img :src="userlogo" alt="">
          <div class="user">佳鑫诺</div>
        </div>
        <div class="right">
          <button class="btn">立即报名</button>
          <span class="number">已有{{target?.vetifyNumber}}人报名</span>
        </div>
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
  if (props?.target?.type === subjectType.QKK) str = 'course_center_qkk.png'
  if (props?.target?.type === subjectType.TSK) str = 'course_center_tsk.png'
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

    .year {
      margin: 10px 0;
      font-size: 14px;
      color: grey;
      display: flex;
      align-items: center;
    }

    .empty {
      padding: 8px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 4px;
      color: #00baff;
      background-color: #e1f7ff;
      width: fit-content;
    }
    .submit {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;
      .images {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        img {
          width: 34px;
        }
        .user {
          font-size: 12px;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
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
        }
        .number {
          font-size: 14px;
          color: gray;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>