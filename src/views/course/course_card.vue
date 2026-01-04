<template>
  <section class="course_card" @click="handleDetails">
    <div class="images">
      <img class="image" :src="image" alt="" />
      <img class="typeimage" :src="typeImage" />
    </div>
    <div class="infos">
      <div class="title">{{ target?.title }}</div>
      <div class="sectitle">{{ target?.secTitle }}</div>
      <div class="date">开班日期： {{ target?.startDate }}</div>
      <div class="tagbox">
        <div class="tag">
          <div v-if="!target?.location?.length" class="empty">暂无</div>
          <div v-if="!target?.time?.length" class="empty time-empty">暂无</div>
        </div>
        <div class="number">已有{{ target?.vetifyNumber }}人报名</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import router from '@/router'
import { reactive, watch, computed, ref } from 'vue'
import { subjectType } from './datas'
const emit = defineEmits('selected')
const props = defineProps({
  target: {
    type: Object,
    required: true,
    default: () => {},
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
const handleDetails = () => {
  emit('selected', props?.target?.id)
}
</script>
<style lang="scss" scoped>
.course_card {
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
  .images {
    position: relative;
    .image {
      border-radius: 4px 4px 0 0;
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
      line-height: 20px;
    }
    .date {
      margin-top: 20px;
      font-size: 14px;
    }
    .tagbox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .tag {
        display: flex;
        column-gap: 10px;
        .empty {
          padding: 8px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 4px;
          color: #00baff;
          background-color: #e1f7ff;
        }
        .time-empty {
          color: #ff6000;
          background-color: #fff2e2;
        }
      }
    }
    .number {
      font-size: 14px;
    }
  }
}
</style>
