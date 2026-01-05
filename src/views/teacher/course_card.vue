<template>
  <section class="course_card" @click="handleDetails">
    <div class="images">
      <img class="image" :src="image" alt="" />
      <img class="typeimage" :src="typeImage" />
    </div>
    <div class="infos">
      <div class="title">{{ target?.title }}</div>
      <div class="sectitle">{{ target?.secTitle }}</div>
      <div class="tag">{{ target?.location?.join(',') }}</div>
      <div class="tagbox">
        <div class="number">已有{{ target?.vetifyNumber }}人报名</div>

        <div class="submit">
          立即报名
        </div>
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
    display: grid;
    place-content: center;

    .image {
      border-radius: 4px 4px 0 0;
      // width: 100%;
      height: 260px;
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
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-wrap: nowrap;
    .title {
      font-size: 18px;
      font-weight: 500;
    }

    .sectitle {
      font-size: 16px;
      font-weight: 500;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tag {
      padding: 4px;
      border-radius: 4px;
      background-color: #E1F7FF;
      color: #00BAFF;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      width: fit-content;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
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

      .number {
        font-size: 14px;
      }

      .submit {
        width: 100px;
        height: 30px;
        border-radius: 25px;
        font-size: 14px;
        display: grid;
        place-content: center;
        background-color: #409EFF;
        color: white;
      }
    }

  }
}
</style>
