<template>
  <section class="Course">
   <Banner :banner="bannercourse" />
   <Courseform />
   <div class="cards">
    <CourseCard v-for="(course, index) in courses" :key="index" :target="course" />
   </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Banner from '@/components/common/banner.vue'
import bannercourse from '@/assets/banner_course.png'
import Courseform from './courseform.vue';
import CourseCard from './course_card.vue'
import { courses } from './datas';
</script>
<style lang="scss" scoped>
.Course{
  padding: 0px 100px;
  .cards {
    padding-bottom: 20px;
    display: grid;
    gap: 20px;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
