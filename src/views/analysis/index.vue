<script setup lang="ts">
import Topbar from '../home/topbar.vue'
import Tabbar from '../home/tabbar.vue'
import Bottombar from '../home/bottombar.vue'
import Course from '@/views/course/index.vue'
import Assiasnt from '@/views/assisant/index.vue'
import Contact from '@/views/contact/index.vue'
import index from '@/views/index/index.vue'
import { TABSKEYS } from '../home/data'
import { ref } from 'vue'
const tab = ref(TABSKEYS.HOME)
const tabs = [
  { label: '首页', value: TABSKEYS.HOME, component: index },
  { label: '选课程', value: TABSKEYS.COURSE, component: Course },
  { label: '找名师', value: TABSKEYS.TEACHER, component: Course },
  { label: '升本情况', value: TABSKEYS.SCHOOL, component: Course },
  { label: '升本助手', value: TABSKEYS.ASSISSANT, component: Assiasnt },
  { label: '联系我们', value: TABSKEYS.CONTACT, component: Contact },
  { label: '媒体合伙人', value: TABSKEYS.UNIN, component: Course },
]
let radio1 = ref('2025')
</script>

<template>
  <div class="Home">
    <Topbar />
    <Tabbar v-model:value="tab" :tabs="tabs" />
    <div class="content news" style="margin-top: 20px; position: relative; z-index: 110">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="position: relative; z-index: 1000; margin-bottom: 15px">
        <el-breadcrumb-item><a href="/" style="font-weight: 500; font-size: 16px">首页</a></el-breadcrumb-item>
        <el-breadcrumb-item><a style="font-weight: 600; color: rgb(51, 51, 51); font-size: 16px">模拟卷视频解析</a></el-breadcrumb-item>
      </el-breadcrumb>

      <el-radio-group v-model="radio1" size="medium">
        <el-radio-button label="2025"></el-radio-button>
        <el-radio-button label="2024"> </el-radio-button>
      </el-radio-group>
      <div style="min-height: 500px; margin-top: 10px">
        <el-empty description="暂无数据" style="margin-top: 150px"></el-empty>
      </div>

      <div class="price-tips">
        <h4>模拟卷直播带学课价格说明：</h4>
        <p>1.公共课单个课程（单科全套）价格为15元；</p>
        <p>2.公共课双科课程（文综/理综可任选其一，理综为公共课数学+英语，文综为公共课政治+英语）价格为29元；</p>
        <p>3.专业课全套全科价格为29元/专业。</p>
        <p>4.单场直播带学课，公共课英语/数学价格为1.99元/套，公共课政治、专业课为1元/科（单买单科单套课程后，无法按打包优惠购买，请谨慎选择！）。</p>
      </div>
      <div class="price-tips">
        <h4>温馨提示：</h4>
        <p>1.模拟卷直播带学课为虚拟物品，一经购买，无法退款，请同学认真核对自己所考科目进行下单。</p>
        <p>
          2.购买完成后，下载直播带学课程平台：【云端课堂】APP或电脑客户端：<a href="https://www.baijiayun.com/classroomdown"
            >https://www.baijiayun.com/classroomdown</a
          >，输入购买直播带学课的手机号+验证码，找到模拟卷直播带学课去看课。
        </p>
        <p>3.建议购买模拟卷直播带学课手机号与查看模拟卷答案手机号、报名手机号保持一致。</p>
        <div class="notice">
          <span>*注意：</span>
          <div class="notice-cont">
            <p>1.若在其他渠道已购买模拟卷直播带学课程，请勿重复拍单！</p>
            <p>2.支付过程中请勿关闭支付窗口，支付成功后将自动刷新页面，如支付成功后未收到支付成功提示，可尝试手动刷新页面。</p>
          </div>
        </div>
      </div>

      <div class="">
        <div class="pay-btn" style="margin-bottom: 0px">
          <div class="select">
            <span>已选 <b style="font-size: 18px">0</b> 套直播带学课</span> <span>已选择套课科目：<b style="font-size: 18px">---</b></span>
          </div>
          <p>
            <span style="margin-right: 10px">需支付：￥<b style="font-size: 18px; color: rgb(245, 108, 108)">0</b></span>
            <button type="button" class="el-button el-button--primary is-round"><!----><!----><span>去支付</span></button>
          </p>
        </div>
      </div>
    </div>

    <Bottombar />
  </div>
</template>

<style scoped lang="scss">
.Home {
}

.content {
  width: 1200px;
  margin: 0 auto;

  .price-tips {
    margin: 5px 38px 20px;

    p {
      margin: 7px 0;
      font-size: 13px;
    }
  }

  .notice {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    color: #f56c6c;
    font-weight: bold;
    margin-top: 0.1rem;
  }

  .pay-btn {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 10px;
    padding: 12px 20px;
  }
}
</style>
