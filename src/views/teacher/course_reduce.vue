<template>
  <section class="course_reduce">
   <div class="title">
    <img :src="course_Center_detail" alt="">
      名师详情
   </div>
   <div class="contents">
    {{ target?.desc }}
   </div>
  </section>
</template>
<script lang="ts" setup>
import course_Center_detail from '@/assets/course_Center_detail.png'
import reduce_image from './reduce_image.vue';
const props = defineProps({
  target: {
    type: Object,
    required: true,
    default: () => { },
  },
})
</script>
<style lang="scss" scoped>
.course_reduce{
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  .title {
    display: flex;
    column-gap: 8px;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    margin-bottom: 20px;
    img {
      height: 20px;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
