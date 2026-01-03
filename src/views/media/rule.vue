<template>
  <section class="rule">
   <div class="title">规则解释</div>
   <div class="pg">
    <div class="pgtitle">1.奖励计算规则</div>
    <p class="contents">30天为一个核算周期：从某平台发布作品当日开始起算，到第30天的总播放量，作为核算数据；同一内容发布到多平台，只单独计算每个平台的播放量，不合并计算（如A平台发布a作品，B平台发布a作品，播放量A+B平台不合并）</p>
   </div>
   <div class="pg">
    <div class="pgtitle">2.发布时间规则</div>
    <p class="contents">如果发布内容30天内播放量及互动量达标，请三天内进行奖励核算报备，逾期奖励作废。如果发布内容30天后仍然未达标，则后期再达标也不再核算奖励。</p>
    <div class="notice">注意事项：如用不当手段谋取播放量骗取奖金，经核实后取消奖金发放资格。</div>
   </div>
   <div class="pg">
    <div class="pgtitle">3.发布内容</div>
    <p class="contents">主题立意：专升本相关积极向上，传播正能量。</p>
    <p class="contents">内容要求：发布文字、图片或视频均可：</p>
    <p class="contents">含有“佳鑫诺”文字元素、品牌标识元素，抖音作品@佳鑫诺专升本、所有作品需要带话题#河北专升本#河北专接本#佳鑫诺专升本</p>
    <div class="others">
      <div class="example">
        例:
      </div>
      <div class="content">
        <ul>
          <ol>1、学生教室学习的画面，教室里有佳鑫诺的LOGO。</ol>
          <ol>2、学生在学校里看到佳鑫诺工作人员工作的场景。</ol>
          <ol>3、佳鑫诺办公室举办的活动，以学生视角拍摄。</ol>
          <ol>4、其他内容不限以上内容。</ol>
        </ul>
      </div>
    </div>
    <div class="notice">注意事项：1、投稿内容必须是原创，非原创或有侵权投诉风险的内容不可投稿。</div>
    <div class="notice">&nbsp;&nbsp;2、作品不要出现其他机构任何标志及字样。</div>
   </div>
  <div class="title">活动解释及审核机制</div>
   <div class="pg">
    <div class="others">
      <div class="content">
        <ul>
          <ol>1.添加官方老师微信：jxnzsb1</ol>
          <ol>2.发相关平台账号截图--证明账号本人、作品发布时间及播放量、互动量截图</ol>
          <ol>3.三个工作日审核，审核成功后，预计15个工作日内到账</ol>
        </ul>
      </div>
    </div>
   </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'

</script>
<style lang="scss" scoped>
.rule{
  background-color: white;
  padding: 20px 100px;
  .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }
  .pg {
    margin-bottom: 20px;
    .pgtitle {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .contents {
      font-size: 18px;
      line-height: 26px;
    }
    .notice {
      font-size: 20px;
      font-weight: 500;
      margin-top: 20px;
    }
    .others {
      display: flex;
      column-gap: 6px;
      line-height: 20px;
    }
  }
}
</style>
