<template>
  <section class="case_card">
    <div class="title">扫码报名媒体合伙人</div>
    <div class="contents">加入了解更多报名方法和最新活动</div>
    <div class="code">
      <img :src="code" alt="" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import code from '@/assets/code.png'
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  sectitle: {
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
  align-items: center;
  height: 300px;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #3874f6;
  }
  .contents {
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    padding: 10px 0;
  }
  .code {
    display: grid;
    place-content: center;
    img {
      height: 200px;
    }
  }
}
</style>
