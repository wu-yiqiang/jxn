<template>
  <section class="reward">
    <theme title="现金奖励" sec-title="加入媒体合伙人分享专属链接获高额返现奖励" >
      <div class="rewards">
        <reward_card index="01" title="按播放量兑换奖金" >
          <div class="item">
            <div class="itemcontent">单篇内容网上曝光≤2000次曝光/浏览量，不计算奖金</div>
          </div>
          <div class="item">
            <div class="itemcontent">单篇内容网上曝光＞2000次曝光/浏览量，5元/1000次曝光（封顶300元）</div>
          </div>
          <div class="item">
            <div class="itemcontent">单篇内容网上曝光＞10W+次数，额外奖励50元</div>
          </div>
        </reward_card>
        <reward_card index="02" title="按互动量兑换奖金" >
          <div class="item">
            <div class="itemtitle">抖音、快手：</div>
            <div class="itemcontent">单篇内容互动量≤100次，不计算奖金单篇内容互动量＞100次， 5元/100次（封顶300元）</div>
          </div>
          <div class="item">
            <div class="itemtitle">小红书：</div>
            <div class="itemcontent">单篇内容互动量≤60次，不计算奖金单篇内容互动量＞60次， 5元/100次（封顶300元）单篇内容互动量＞1000次，额外奖励50元）</div>
          </div>
        </reward_card>
        <reward_card index="03" title="推荐奖" >
          <div class="item">
            <div class="itemtitle">招生奖：</div>
            <div class="itemcontent">凡是媒体合伙人推荐学生（提供学生电话及专科学校信息即可），如学生报班成功后，奖励50元/人，上不封顶。</div>
          </div>
          </reward_card>
        <reward_card index="04" title="月度挑战奖" >
          <div class="item">
            <div class="itemcontent">每月评选最优媒体合伙人，奖金500元。
符合其中一项条件：</div>
          </div>
          <div class="item">
            <div class="itemtitle">抖音：</div>
            <div class="itemcontent">单个作品播放量超10万</div>
          </div>
          <div class="item">
            <div class="itemtitle">小红书：</div>
            <div class="itemcontent">单个作品互动量超1000次</div>
          </div>
          <div class="item">
            <div class="itemtitle">注意：每月选取符合条件的1人，给予奖励。</div>
          </div>
          </reward_card>
      </div>
    </theme>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import theme from './theme.vue'
import reward_card from './reward_card.vue';
</script>
<style lang="scss" scoped>
.reward{
  padding: 20px 100px;
  .rewards {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    .item {
      padding: 0 10px;
      display: flex;
      // align-items: center;
      margin-top: 20px;
      .itemtitle {
        color: rgb(54, 102, 255);
        font-size: 14px;
        line-height: 20px;
      }
      .itemcontent {
        flex: 1;
        font-size: 12px;
        line-height: 20px;
        color: #333333;
      }
    }
  }
}
</style>