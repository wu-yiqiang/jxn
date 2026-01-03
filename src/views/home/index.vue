<script setup lang="ts">
import Topbar from './topbar.vue'
import Tabbar from './tabbar.vue'
import Bottombar from './bottombar.vue'
import Course from '@/views/course/index.vue'
import Assiasnt from '@/views/assisant/index.vue'
import Contact from '@/views/contact/index.vue'
import Media from '@/views/media/index.vue'
import { TABSKEYS } from './data'
import { ref } from 'vue'
const tab = ref(TABSKEYS.HOME)
const tabs = [
  { label: '首页', value: TABSKEYS.HOME, component: Course, },
  { label: '选课程', value: TABSKEYS.COURSE , component: Course},
  { label: '找名师', value: TABSKEYS.TEACHER, component: Course },
  { label: '升本情况', value: TABSKEYS.SCHOOL , component: Course},
  { label: '升本助手', value: TABSKEYS.ASSISSANT , component: Assiasnt},
  // { label: '上岸资料', value: TABSKEYS.FILES , component: Course},
  { label: '联系我们', value: TABSKEYS.CONTACT , component: Contact},
  { label: '媒体合伙人', value: TABSKEYS.UNIN , component: Media},
]
</script>

<template>
  <div class="Home">
    <Topbar />
    <Tabbar v-model:value="tab" :tabs="tabs" />
    <component :is="tabs?.find(item => item.value === tab)?.component" />
    <Bottombar />
  </div>
</template>

<style scoped lang="scss">
.Home {
}
</style>
