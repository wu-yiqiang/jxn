<template>
  <section class="topbar">
    <div class="leftbox">想升本就找鑫佳诺</div>
    <div class="rightbox">
      <div class="location">1212</div>
      <div class="about" @click="handleAbout">
        <img :src="toplogo" alt="" />
        关于鑫佳诺
      </div>
      <div class="phone">升本热线：16630103692</div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import toplogo from '@/assets/top_logo.png'
import router from '@/router';
const handleAbout = () => {
  router.push('/about')
}
</script>
<style lang="scss" scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 100px;
  .leftbox {
    font-size: 13px;
  }

  .rightbox {
    display: flex;
    column-gap: 20px;
    align-content: center;
    font-size: 14px;

    .about {
      display: flex;
      align-items: center;
      column-gap: 4px;
      cursor: pointer;
    }
  }
}
</style>
