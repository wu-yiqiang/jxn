<template>
  <section class="case">
    <theme title="分享案例" sec-title="加入媒体合伙人，和同学们一起分享经验" >
      <div class="cases">
        <case_card title="01" contents="我是佳鑫诺学员，一边升本，一边在抖音分享学习日常，一个月通过发抖音，领取了800现金奖励，一个月饭票有了！" student="王同学"/>
        <case_card title="02" contents="佳鑫诺有品牌效应，发作品播放量很快就能涨，用来兼职换现金真不错！" student="张同学" />
        <case_card title="03" contents="报了佳鑫诺课程，升本成功了通过加入合伙人，每月的生活费没和家里人要过，都是佳鑫诺给的！" student="李同学" />
        <part_card />
      </div>
    </theme>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import theme from './theme.vue'
import case_card from './case_card.vue';
import part_card from './part_card.vue'
</script>
<style lang="scss" scoped>
.case{
  width: 100%;
  .cases {
    display: flex;
    column-gap:30px;
    padding: 20px 100px;
  }
}
</style>