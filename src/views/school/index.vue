<template>
  <section class="school">
    <Banner :banner="bannerschool" />
    <div class="location">
      <div
        v-for="(location, index) in tablists"
        :key="index"
        :class="location.value === val ? 'tab selected' : 'tab'"
        @click="handleSelected(location?.value)"
      >
        {{ location.value }}
      </div>
    </div>
    <div class="contentbox">
      <div class="leftbox">
        <listItem :key="val" :lists = 'tablists?.find(item => item.value === val)?.messages' />
      </div>
      <div class="right-box">
        <signbox />
        <Hot_course />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Banner from '@/components/common/banner.vue'
import bannerschool from '@/assets/banner_school.jpg'
import { tabKeys, tablists } from './datas'
import { ref } from 'vue';
import Hot_course from '../course/hot_course.vue';
import signbox from './signbox.vue';
import listItem from './list-item.vue';
const val = ref(tabKeys.NEWMESSAGE)
const handleSelected = (value: string) => {
  val.value = value
}
</script>
<style lang="scss" scoped>
.school{
  padding: 10px var(--padding-width) ;
  .location {
    display: flex;
    justify-content: center;
    column-gap: 10px;
    .tab {
      cursor: pointer;
      text-align: center;
      font-weight: 500;
      padding: 6px 10px;
      &:hover {
        color: #00baff;
      }
    }
  }
  .selected {
    color: #00baff;
    background-color: #e3f5fd;
    border-radius: 2px;
  }
  .contentbox {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    .leftbox {
      flex: 1;
    }
    .right-box {
      display: grid;
      row-gap: 20px;
    }
  }
}
</style>
