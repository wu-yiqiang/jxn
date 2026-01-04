<template>
  <section class="cash">
    <theme title="流量换现金" sec-title="加入媒体合伙人分享专属链接获高额返现奖励">
      <div class="contentbox">
        <cash_item title="加入媒体合伙人" :image="step1" />
        <cash_item title=" " :image="step" />
        <cash_item title="平台发布作品" :image="step2" />
        <cash_item title=" " :image="step" />
        <cash_item title="查看30天单条作品数据" :image="step3" />
        <cash_item title=" " :image="step" />
        <cash_item title="兑换现金奖励" :image="step4" />
      </div>
    </theme>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import theme from './theme.vue'
import cash_item from './cash_item.vue'
import step from '@/assets/step.png'
import step1 from '@/assets/step1.png'
import step2 from '@/assets/step2.png'
import step3 from '@/assets/step3.png'
import step4 from '@/assets/step4.png'
</script>
<style lang="scss" scoped>
.cash {
  padding: 20px var(--padding-width);
  .contentbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
