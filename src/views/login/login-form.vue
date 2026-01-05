<template>
  <div class="login">
    <div class="title">登录</div>
    <div class="form">
      <div class="phone">
        <SvgIcon name="phone" size="20" />
        <input />
      </div>
      <div class="verifycode">
        <SvgIcon name="lock" size="20" />
        <input /> <button class="sendcode">发送验证码</button>
      </div>
      <div class="register" @click="handleRegister">免费注册</div>
    </div>
    <div class="buttons">
      <button class="button" @click="handleLogin">登录</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { STATUS } from './datas'
import router from '@/router'
const emit = defineEmits(['update'])
const handleRegister = () => {
  emit('update', STATUS.REGISTER)
}
const handleLogin = () => {
  router.push('/home')
}
</script>
<style lang="scss" scoped>
.login {
  background-color: white;
  border-radius: 30px;
  padding: 50px;
  width: 400px;
  height: 400px;
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
    row-gap: 30px;

    .phone,
    .verifycode {
      padding: 10px;
      border-radius: 20px;
      background-color: rgb(238, 238, 238);
      display: flex;
      align-content: center;

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

      .sendcode {
        border: none;
        cursor: pointer;
      }
    }

    .register {
      display: flex;
      justify-content: flex-end;
      color: rgb(2, 187, 255);
      cursor: pointer;
      font-size: 14px;
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
