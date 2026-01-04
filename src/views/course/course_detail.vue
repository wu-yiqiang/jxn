<template>
  <section class="course_detail">
    <div class="title"><strong class="breadcum">选课程</strong> > <strong class="breadcum">课程详情</strong></div>
    <div class="contents">
      <div class="leftbox">
        <course_info :target="target" />
      </div>
      <hot_course :target="target" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import hot_course from './hot_course.vue'
import course_info from './course_info.vue';
import {courses} from './datas'
const props = defineProps({
  courseId: {
    type: Number,
    required: true,
    default: () => {},
  },
})
const target = computed(() => {
  return courses?.find(item => item.id === props?.courseId)
})
</script>
<style lang="scss" scoped>
.course_detail {
  padding: 20px var(--padding-width);
  .title {
    padding: 10px 0;
    .breadcum {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .contents {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    .leftbox {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }
  }
}
</style>
