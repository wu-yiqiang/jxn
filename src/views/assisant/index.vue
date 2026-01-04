<template>
  <section class="Assisant">
    <Banner :banner="bannerassisant" />
    <Theme title="升本专业查询" sec-title="轻松掌握心仪学府信息，助您成功冲刺梦想之门" background-image="assistant1.png">
      <template #left>
        <div class="title">升本专业查询</div>
        <div class="sectitle">填好自己的相关信息就可以查到自己专科专业对应的升本专业啦！考试科目一目了然！</div>
      </template>
      <template #right>
        <img class="image" :src="shenbenzhaunyecode" alt="" />
      </template>
    </Theme>
    <Theme title="升本专业分析" sec-title="升本路上不迷茫，选对方向动力强" background-image="assistant2.png">
      <template #left>
        <img class="image" :src="zhuanyefenxi" alt="" />
      </template>
      <template #right>
        <div class="title">升本专业分析</div>
        <div class="sectitle">2026河北升本新政策考试第一年，提前了解专业考试难度，定目标更清晰。</div>
      </template>
    </Theme>
    <Theme
      title="招生计划查询"
      sec-title="轻松掌握心仪学府信息，助您成功冲刺梦想之门
"
      background-image="assistant3.png"
    >
      <template #left>
        <div class="title">招生计划查询</div>
        <div class="sectitle">收录河北招收专升本的学校及招收的详细专业你想要的专业、院校全都有！</div>
      </template>
      <template #right>
        <img :src="zhaosheng" alt="" />
      </template>
    </Theme>
    <Theme title="模拟志愿填报" sec-title="助你准确选择最佳志愿，开启人生新篇章" background-image="assistant4.png">
      <template #left>
        <img class="image" :src="monizhiyuan" alt="" />
      </template>
      <template #right>
        <div class="title">模拟志愿填报</div>
        <div class="sectitle">志愿填报不求人输入分数即可查询理想院校啦！</div>
      </template>
    </Theme>
  </section>
  <div class="infos">
    <div class="title">选择佳鑫诺，金榜题名创辉煌</div>
    <div class="engTitle">Choose JiaxinNuo, achieve glory by winning the top spot on the gold list</div>
    <div class="numbers">
      <div class="item">
        <div class="title">
          41
          <div class="unit">个</div>
        </div>
        <div class="count">全省第一</div>
      </div>
      <div class="item">
        <div class="title">
          224
          <div class="unit">个</div>
        </div>
        <div class="count">全省前十</div>
      </div>
      <div class="item">
        <div class="title">
          586
          <div class="unit">个</div>
        </div>
        <div class="count">全省前二十</div>
      </div>
      <div class="item">
        <div class="title">
          112
          <div class="unit">个</div>
        </div>
        <div class="count">数学满分</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Banner from '@/components/common/banner.vue'
import bannerassisant from '@/assets/assisant_banner.jpg'
import Theme from './theme.vue'
import shenbenzhaunyecode from '@/assets/shengbenzhuanyecode.png'
import zhuanyefenxi from '@/assets/zhuanyefenxi.png'
import zhaosheng from '@/assets/zhaosheng.png'
import monizhiyuan from '@/assets/monizhiyuan.png'
</script>
<style lang="scss" scoped>
.Assisant {
  padding: 0 var(--padding-width);

  .title {
    font-size: 28px;
    font-weight: 500;
  }

  .sectitle {
    font-size: 18px;
    margin-top: 14px;
    color: #333333;
    width: 350px;
    line-height: 28px;
  }

  .image {
    width: 260px;
  }
}
.infos {
  background-image: url('../../assets/assistant_bg.png');
  height: 628px;
  color: white;
  padding-top: 160px;
  .title {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }
  .engTitle {
    font-size: 28px;
    text-align: center;
  }
  .numbers {
    display: flex;
    padding: 100px 20%;
    .item {
      flex: 1;
      display: grid;
      row-gap: 20px;
      .title {
        font-size: 40px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        .unit {
          font-size: 20px;
          font-weight: 400;
        }
      }
      .count {
        text-align: center;
        font-size: 22px;
      }
    }
  }
}
</style>
