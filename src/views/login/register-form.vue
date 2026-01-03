<template>
  <div class="resgiter">
    <div class="title">注册账号</div>
    <div class="form">
      <div class="phone select">
        <div class="svg">
          <SvgIcon name="phone" size="20" />
        </div>
        <el-select v-model="formState.year" :options="years" placeholder="请选择专升本考试年份" />
      </div>
      <div class="phone select">
        <div class="svg">
          <SvgIcon name="phone" size="20" />
        </div>
        <el-select v-model="formState.school" :options="schools" placeholder="请选择专科在读学校" />
      </div>
      <div class="phone">
        <SvgIcon name="phone" size="20" />
        <input placeholder="请输入姓名" />
      </div>
      <div class="phone">
        <SvgIcon name="phone" size="20" />
        <input placeholder="请输入手机号" />
      </div>
      <div class="verifycode">
        <SvgIcon name="lock" size="20" />
        <input placeholder="请输入验证码" /> <button class="sendcode">发送验证码</button>
      </div>
      <div class="login" @click="handleLogin">
        已有账号？<span class="register">去登录</span></div>
    </div>
    <div class="buttons">
      <button class="button">立即注册</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { schools, STATUS, years } from './datas';
const emit = defineEmits(['update'])
const handleLogin = () => {
  emit('update', STATUS.LOGIN)
}
const formState = ref({
  year: '',
  school: ''
})
</script>
<style lang="scss" scoped>
.resgiter {
  background-color: white;
  border-radius: 30px;
  padding: 50px;
  width: 400px;
  height: 560px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .title {
    font-size: 22px;
    color: black;
    font-weight: 500;
    display: grid;
    place-content: center;
    height: 40px;
  }

  .form {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .phone,
    .verifycode {
      padding: 10px;
      border-radius: 20px;
      background-color: rgb(238, 238, 238);
      display: flex;
      align-content: center;

      .svg {
        display: flex;
        align-items: center;
      }

      input {
        width: 100%;
        border: none;
        background-color: rgb(238, 238, 238);
        flex: 1;

        &:focus {
          border: none;
          outline: none;
          border-color: transparent;
        }
      }

      ::v-deep(.el-select) {
        border: none;

        &:focus {
          border: none;
        }

        .el-select__wrapper {
          background-color: rgb(238, 238, 238);
          border: none;
          box-shadow: none;

          &:focus {
            border: none;
          }

        }
      }

      .sendcode {
        border: none;
        cursor: pointer;
      }
    }
    .select {
      padding-top: 3px;
      padding-bottom: 3px;
    }
    .login {
      display: flex;
      justify-content: flex-end;
      font-size: 14px;

      .register {

        color: rgb(2, 187, 255);
        cursor: pointer;
        font-size: 14px;
      }
    }

  }

  .buttons {
    .button {
      color: white;
      display: grid;
      place-content: center;
      padding: 6px;
      border-radius: 20px;
      height: 40px;
      width: 100%;
      border: 0;
      background-color: rgb(0, 146, 255);
      cursor: pointer;
    }
  }
}
</style>
