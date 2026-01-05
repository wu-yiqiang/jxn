<template>
  <section class="hot_card">
    <div class="image">
      <img :src="image" alt="" width="120px" />
    </div>
    <div class="titles">
      <div class="title">{{ target?.title }}</div>
      <div class="number">已有{{ target?.vetifyNumber }}人报名</div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const props = defineProps({
  target: {
    type: Object,
    required: true,
    default: () => {},
  },
})
const image = computed(() => {
  return new URL(`../../assets/${props?.target?.image}`, import.meta.url).href
})
</script>
<style lang="scss" scoped>
.hot_card {
  display: flex;
  align-content: space-between;
  margin-bottom: 14px;
  column-gap: 10px;
  .titles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 16px;
      font-weight: 500;
    }
    .number {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
