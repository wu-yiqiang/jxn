<template>
  <section class="aibot">
   <div class="title"> 您好，我是鑫佳诺AI助教小诺</div>
   <div class="contents">
    <div class="content">智能伴学</div>
    <div class="content">科学备考</div>
    <div class="content">高效升本</div>
   </div>
   <div class="buttons" @click="handleAi">
    立即体验
   </div>
  </section>
</template>
<script lang="ts" setup>
import router from '@/router';
import { reactive, watch, computed, ref } from 'vue'
const handleAi = () => {
  router.push('/ai')
}
</script>
<style lang="scss" scoped>
.aibot{
  background-image: url('../../assets//ai.png');
  background-repeat: no-repeat;
  background-position: center center;
  width: 320px;
  height: 180px;
  padding: 20px 10px;
  border-bottom: 10px;  
  .title {
    font-size: 14px;
    font-weight: 500;
    margin-left: 100px;
    margin-top: 26px;
  }
  .contents {
    display: flex;
    column-gap: 10px;
    .content {
      flex: 1;
      padding: 8px 0;
      background-color: white;
      border-radius: 20px;
      font-size: 12px;
      display: grid;
      place-content: center;
      margin-top: 30px;
    }
  }
  .buttons {
    padding: 10px 0;
    color: white;
    background: linear-gradient( 180deg, #90E3FF 0%, #0299FF 100%);
    border-radius: 20px;
    height: 30px;
    margin-top: 10px;
    display: grid;
    place-content: center;
    cursor: pointer;
  }
}
</style>
