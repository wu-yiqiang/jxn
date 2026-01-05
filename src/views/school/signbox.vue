<template>
  <section class="signbox">
   <div class="title">
    <img :src="liuyan" alt="">
    留言资讯
    </div>
    <div class="texts">
      <textarea class="text" placeholder="我想资讯的问题是..."></textarea>
    </div>
    <div class="button">
      确定
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import liuyan from "@/assets/liuyan_icon.png"
</script>
<style lang="scss" scoped>
.signbox{
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  .title {
    display: flex;
    column-gap: 10px;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .texts {
    flex: 1;
    display: flex;
    .text {
      flex: 1;
      border-radius: 2px;
      border: 1px solid #DEE2EA;
      background-color: #F5F7FA;
      padding: 10px;
      height: 200px;
    }
  }
  .button {
    margin-top: 10px;
    font-size: 16px;
    color: white;
    height: 36px;
    border-radius: 50px;
    background-color: #409EFF;
    display: grid;
    place-content: center;
  }
}
</style>
