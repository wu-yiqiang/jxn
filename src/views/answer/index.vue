<script setup lang="ts">
import Topbar from '../home/topbar.vue'
import Tabbar from '../home/tabbar.vue'
import Bottombar from '../home/bottombar.vue'
import Course from '@/views/course/index.vue'
import Assiasnt from '@/views/assisant/index.vue'
import Contact from '@/views/contact/index.vue'
import index from '@/views/index/index.vue'
import { TABSKEYS } from '../home/data'
import { ref } from 'vue'
const tab = ref(TABSKEYS.HOME)
const tabs = [
  { label: '首页', value: TABSKEYS.HOME, component: index },
  { label: '选课程', value: TABSKEYS.COURSE, component: Course },
  { label: '找名师', value: TABSKEYS.TEACHER, component: Course },
  { label: '升本情况', value: TABSKEYS.SCHOOL, component: Course },
  { label: '升本助手', value: TABSKEYS.ASSISSANT, component: Assiasnt },
  // { label: '上岸资料', value: TABSKEYS.FILES , component: Course},
  { label: '联系我们', value: TABSKEYS.CONTACT, component: Contact },
  { label: '媒体合伙人', value: TABSKEYS.UNIN, component: Course },
]
let radio1 = ref('2025')
</script>

<template>
  <div class="Home">
    <Topbar />
    <Tabbar v-model:value="tab" :tabs="tabs" />
    <div class="content news" style="margin-top: 20px; position: relative; z-index: 110">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="position: relative; z-index: 1000; margin-bottom: 15px">
        <el-breadcrumb-item><a href="/" style="font-weight: 500; font-size: 16px">首页</a></el-breadcrumb-item>
        <el-breadcrumb-item><a style="font-weight: 600; color: rgb(51, 51, 51); font-size: 16px">模拟卷答案</a></el-breadcrumb-item>
      </el-breadcrumb>

      <el-radio-group v-model="radio1" size="medium">
        <el-radio-button label="2025"></el-radio-button>
        <el-radio-button label="2024"> </el-radio-button>
      </el-radio-group>
      <div style="min-height: 500px; margin-top: 10px">
        <el-empty description="暂无数据" style="margin-top: 150px"></el-empty>
      </div>
    </div>
    <Bottombar />
  </div>
</template>

<style scoped lang="scss">
.Home {
}

.content {
  width: 1200px;
  margin: 0 auto;
}
</style>
