<template>
  <section class="Bottombar">
   <div class="infos">
    <div class="titles">
      <img :src="footerlogo" alt="">
      <div class="title">河北省兼具口碑与实力的教育机构</div>
    </div>
    <div class="info">
      <div class="in">
        <div class="title">关于佳鑫诺</div>
        <div class="details">品牌介绍</div>
      </div>
      <div class="in">
        <div class="title">友情链接</div>
        <div class="details">佳鑫诺教育官网</div>
      </div>
      <div class="in">
        <div class="title">联系我们</div>
        <div class="details">16630103692</div>
      </div>
    </div>
    <div class="qrcode">
      <div class="weixin">
        <div class="title">微信公众号</div>
        <img :src="weixincode" width="100px" alt="">
      </div>
      <div class="weixin">
        <div class="title">官方抖音账号</div>
        <img :src="douyincode" width="100px" alt="">
      </div>
      <div class="weixin">
        <div class="title">小佳题库APP下载</div>
        <img :src="tikucode" width="100px" alt="">
      </div>
    </div>
   </div>
   <div class="copyrightbox">
    <div class="addr">石家庄市长安区佳鑫诺培训学校©1997-2025佳鑫诺版权所有 佳鑫诺官网 | 佳鑫诺专升本 | 联系我们

</div>
<div class="copyright">Copyright © 1997-2025 www.jxnedu.cn All Rights Reserved 冀公网安备13010202003932号冀ICP备12019741号-2 本项目由佳鑫诺教育信息化提供技术支持</div>
   </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import weixincode from '@/assets/weixin_code.png'
import douyincode from '@/assets/douyin_code.jpg'
import tikucode from '@/assets/tiku_code.png'
import footerlogo from '@/assets/foot_logo.png'
</script>
<style lang="scss" scoped>
.Bottombar{
  background-color: rgb(34,34,34);
  padding: 30px 100px;
  color: rgb(146,146,146);
  display: grid;
  row-gap: 20px;
  .infos {
    border-bottom: 1px solid rgb(58, 58, 58);
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 30px;
    .titles {
      display: grid;
      row-gap: 30px;
      .title {
        color: white;
      }
    }
    .info {
      flex: 1;
      display: flex;
      .in {
        flex: 1;
        display: grid;
        row-gap: 20px;
        .title {
          color: white;
        }
        .detail {
                    color: rgb(121,121,121);
        }
      }
    }
    .qrcode {
      display: flex;
      column-gap: 20px;
      .weixin {
        display: grid;
        row-gap: 10px;
        .title {
          color: white;
        }
        img {
          border-radius: 4px;
        }
      }
    }
  }
  .copyrightbox {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    .addr,.copyright {
      display: grid;
      place-content: center;
      font-size: 14px;
    }
  }
}
</style>
