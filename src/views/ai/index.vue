<template>
  <section class="ai">
   <div class="topbar">
    <div class="left">
      <img :src="xjnlogo" alt="">
    </div>
   </div>
   <div class="dialog">
    <div v-for="(message, index) in messages" :key="index" class="dia">
      <div v-if="message.type == 'me'" class="me">
        <div class="text">{{ message?.text }}</div>
      </div>
      <div v-else class="notMe">
        <img :src="message?.logo" alt="">
        <div class="text">{{ message?.text }}</div>
      </div>
    </div>
   </div>
   <div class="tools">
    <div class="input">
      <input class="inp" v-model="val" type="text">
      <div class="submit">
        <div class="leftbox"></div>
        <div class="rightbox">
          <div class="send" @click="handleSend">发送</div>
        </div>
      </div>
    </div>
    <div class="tips">内容由AI生成，无法确保真实准确，仅供参考，佳鑫诺信息中心提供技术支持</div>
   </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import xjnlogo from '@/assets/jxn2.png'
import { messages } from './datas';
import logo from '@/assets/classmates.png'
const val= ref('')
const handleSend = () => {
  messages.push({ text: val?.value, type: 'me', logo: '' })
  messages.push({ text: val?.value, type: 'you', logo: logo })
  val.value = ''
}
</script>
<style lang="scss" scoped>
.ai{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .topbar {
    padding: 10px var(--padding-width);
    background-color: white;
    .left {
      img {
        height: 30px;
      }
    }
  } 
  .dialog {
    padding: 20px var(--padding-width2);
    flex: 1;
    background-color: rgb(245, 245, 245);
    overflow-y: auto;
    display: grid;
    // row-gap: 10px;
    .dia {
      height: fit-content;
      .me {
      display: flex;
      justify-content: flex-end;
      .text {
        background-color: white;
        padding: 10px;
        border-radius: 4px;
        height: fit-content;
        color: #2e2d2d;
      }
    }
    .notMe {
      display: flex;
      justify-content: flex-start;
      column-gap: 10px;
      img {
        width: 40px;
      }
      .text {
        background-color: #E2E5F1;
        padding: 10px;
        border-radius: 4px;
        height: fit-content;
        color: #606060;
      }
    }
    }
    
  }
  .tools {
    padding: 0 var(--padding-width2);
    background-color: rgb(245, 245, 245);
    .tips {
      margin: 20px 0;
      color: #9d9d9d;
    }
    .input {
      background-color: white;
      height: 120px;
      border-radius: 30px;
      border: 1px solid rgb(194, 194, 194);
      padding: 20px;
      display: flex;
      flex-direction: column;
      .inp {
        border: none;
        // flex: 1;
        height: 30px;
        &:focus {
           border: none;
          outline: none;
          border-color: transparent;
        }
      }
      .submit {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rightbox {
          .send {
            background-color: #409EFF;
            color: white;
            padding: 10px;
            // height: 50px;
            font-size: 14px;
            width: 120px;
            border-radius: 30px;
            display: grid;
            place-content: center;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
