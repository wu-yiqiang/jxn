<template>
  <section class="courseform">
    <div class="title">全部课程</div>
    <div class="form">

      <el-form :inline="true" :model="formState">
        <el-form-item label="课程校区：">
          <el-select v-model="formState.school" :options="locations" style="width: 240px" @change="handleChange"/>
        </el-form-item>
        <el-form-item label="考试年份：">
          <el-select v-model="formState.year" :options="years" style="width: 240px" @change="handleChange" />
        </el-form-item>
        <el-form-item label="学科类别：">
          <el-select v-model="formState.subject" :options="subjects" style="width: 240px" @change="handleChange" />
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { locations, All, years, subjects } from './datas'
const emit = defineEmits(['change'])
const props = defineProps({
  formState: {
    type: Object,
    required: true,
    default: () => { },
  },
})
const handleChange = () => {
  emit('change')
}
</script>
<style lang="scss" scoped>
.courseform {
  // padding: 0px 100px;
  .title {
    font-size: 18px;
    font-weight: 500;
  }

  .form {
    padding: 10px 0;
  }
}
</style>
