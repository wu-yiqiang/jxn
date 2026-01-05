<template>
  <section class="list-item">
    <div class="items">
      <div v-for="(list, index) in listsOpt" :key="index" class="item">
        <div class="left">
          <div class="index">{{ list?.index }}</div>
          <div class="title">{{ list?.title }}</div>
        </div>
        <div class="right">
          <span class="date">{{ list?.date }}</span>
        </div>
      </div>
    </div>
    <pagenation :total="total" :pageSize="formState.pageSize" :pageNo="formState.pageNo" @change="handlePage" />
  </section>
</template>
<script lang="ts" setup>
import { cloneDeep } from 'lodash-es';
import { onMounted, ref } from 'vue';
import pagenation from '@/components/common/pagenation.vue'
const props = defineProps({
  lists: {
    type: Array,
    required: true,
    default: () => [],
  },
})
const listsOpt = ref([])
const formState = ref({
  pageSize: 10,
  pageNo: 1,
})
const handlePage = (value: number) => {
  formState.value.pageNo = value
  getList()
}
const getList = () => {
  total.value = props?.lists?.length ?? 0
  listsOpt.value = getAllList(formState.value, props?.lists)
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
const total = ref(0)
</script>
<style lang="scss" scoped>
.list-item {
  flex: 1;
  .items {
    border-radius: 4px;
    background-color: white;
    padding: 30px;
    margin-bottom: 30px;
    .item {
      padding: 10px;
      border-bottom: 1px solid #E5E5E5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        column-gap: 20px;
        .index {
          color: #D6DBE3;
          font-weight: 500;
          font-size: 20px;
        }
        .title {
          font-size: 16px;
          font-weight: 400;
        }
      }
      .right {
        .date {
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
