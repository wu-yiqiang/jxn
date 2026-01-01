<template>
  <section class="Login">
    <div class="logo">
      <img :src="loginlogo" alt="">
    </div>
    <div class="loginbox">
      <div class="image">
        <img :src="logindesc" alt="">
      </div>
      <div class="login">
        <div class="title">登录</div>
        <div class="form">
          <div class="phone">
            <SvgIcon name="phone" size="20" />
            <input />
          </div>
          <div class="verifycode">
            <SvgIcon name="lock" size="20" />
            <input />           <button class="sendcode">发送验证码</button>

          </div>
          <div class="register">免费注册</div>
        </div>
        <div class="buttons">
          <button class="button">登录</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import loginlogo from '@/assets/login_logo.png'
import logindesc from '@/assets/login_desc.png'
import SvgIcon from '@/components/common/SvgIcon.vue';
</script>
<style lang="scss" scoped>
.Login {
  background-color: rgb(0, 148, 245);
  height: 100vh;

  .logo {
    padding: 30px 40px;

    img {
      height: 32px;
    }
  }

  .loginbox {
    padding-top: 40px;
    padding-right: 140px;
    display: flex;
    justify-content: flex-end;
    // column-gap: 20px;

    .image {
      flex: 1;
      padding: 60px;
      display: flex;
      justify-content: flex-end;

      img {
        width: 80%;
      }
    }

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
        .phone,.verifycode {
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
  }
}
</style>
