<template>
  <section class="Media">
    <div class="banner">
      <div class="cards">
        <div class="card">
          <img :src="part1" alt="" />
          <div class="title">
            <div class="title">不限平台</div>
            <div class="sectitle">抖音、快手、小红书等均可</div>
          </div>
        </div>
        <div class="card">
          <img :src="part2" alt="" />
          <div class="title">
            <div class="title">不限内容</div>
            <div class="sectitle">直接或间接含佳鑫诺元素</div>
          </div>
        </div>
        <div class="card">
          <img :src="part3" alt="" />
          <div class="title">
            <div class="title">不限次数</div>
            <div class="sectitle">达标即可得奖金，多发多得</div>
          </div>
        </div>
      </div>
    </div>
    <Cash />
    <Case />
    <reward />
    <Rule />
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import part1 from '@/assets/pat1.png'
import part2 from '@/assets/part2.png'
import part3 from '@/assets/part3.png'
import Rule from './rule.vue'
import Cash from './cash.vue'
import Case from './case.vue'
import reward from './reward.vue'
</script>
<style lang="scss" scoped>
.Media {
  .banner {
    height: 440px;
    background-image: url('../../assets/partent.png');
    background-position: center center;
    position: relative;
    margin-bottom: 50px;
    .cards {
      position: absolute;
      bottom: -30px;
      display: flex;
      width: 100%;
      justify-content: center;
      column-gap: 30px;
      .card {
        background-color: white;
        border-radius: 4px;
        padding: 20px 30px;
        display: flex;
        align-items: center;
        column-gap: 10px;
        .title {
          font-size: 18px;
          font-weight: 500;
          color: #3874f6;
        }
        .sectitle {
          margin-top: 10px;
          font-size: 14px;
          color: #333333;
        }
      }
    }
  }
}
</style>
