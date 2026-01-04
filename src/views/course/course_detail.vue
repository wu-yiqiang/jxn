<template>
  <section class="course_detail">
    <div class="title"><strong class="breadcum">选课程</strong> > <strong class="breadcum">课程详情</strong></div>
    <div class="contents">
      <div class="leftbox"></div>
      <hot_course />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import hot_course from './hot_course.vue'
</script>
<style lang="scss" scoped>
.course_detail {
  padding: 20px var(--padding-width);

  .title {
    .breadcum {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .contents {
    display: flex;
    justify-content: space-between;
  }
}
</style>
