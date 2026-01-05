<template>
  <section v-if="status == STATUS.LIST" class="Course">
    <Banner :banner="bannercourse" />
    <Courseform :formState="formState" @change="getList" />
    <div class="cards">
      <CourseCard v-for="(course, index) in lists" :key="index" :target="course" @selected="handleSelected" />
    </div>
    <pagenation :total="total" :pageSize="formState.pageSize" :pageNo="formState.pageNo" @change="handlePage" />
  </section>
  <course_detail v-else :courseId="currentCourseId" @course="status = STATUS.LIST"/>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import Banner from '@/components/common/banner.vue'
import bannercourse from '@/assets/banner_course.png'
import Courseform from './courseform.vue'
import CourseCard from './course_card.vue'
import pagenation from '@/components/common/pagenation.vue'
import course_detail from './course_detail.vue'
import { All, courses, STATUS } from './datas'
import { cloneDeep } from 'lodash-es'
const lists = ref([])
const total = ref(0)
const status = ref(STATUS.LIST)
const currentCourseId = ref(null)
const formState = ref({
  school: All,
  subject: All,
  year: All,
  pageSize: 12,
  pageNo: 1,
})
const getList = () => {
  const list = findList(formState.value)
  total.value = list?.length ?? 0
  lists.value = getAllList(formState.value, list)
}
const handleSelected = (id: number) => {
  currentCourseId.value = id
  status.value = STATUS.DETAILS
}
const findList = (conditions: object) => {
  let list = []
  if (conditions.year === All) {
    list = courses
  }
  if (conditions.year !== All) {
    list = courses?.filter((item) => item.year == conditions?.year)
  }
  if (conditions.subject !== All) {
    list = list?.filter((item) => item.type == conditions?.subject)
  }
  return list
}
const handlePage = (value: number) => {
  formState.value.pageNo = value
  getList()
}
const getAllList = (data: object, lists: Array<object>) => {
  const opts = cloneDeep(lists)
  const { pageNo, pageSize } = data
  const start = pageSize * (pageNo - 1)
  const offset = lists?.length > pageSize ? lists?.length - 1 : pageSize
  return opts?.splice(start, offset)
}
onMounted(() => {
  getList()
})
</script>
<style lang="scss" scoped>
.Course {
  padding: 10px var(--padding-width);
  margin-bottom: 20px;
  .cards {
    padding-bottom: 20px;
    display: grid;
    gap: 20px;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
