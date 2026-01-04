<template>
  <section class="case_card">
    <div class="title">{{ title }}</div>
    <div class="contents">{{ contents }}</div>
    <div class="user">
      <img :src="classmates" alt="" />
      {{ student }}
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import classmates from '@/assets/classmates.png'
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  student: {
    type: String,
    required: true,
    default: '',
  },
  contents: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.case_card {
  flex: 1;
  background-color: white;
  padding: 20px 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  .title {
    font-size: 30px;
    font-weight: 600;
    color: #3874f6;
  }
  .contents {
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    // display: grid;
    // place-content: center;
    padding-top: 50px;
  }
  .user {
    display: flex;
    column-gap: 10px;
    align-items: center;
    img {
      width: 40px;
    }
  }
}
</style>
