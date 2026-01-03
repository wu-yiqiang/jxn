<template>
  <section class="Login">
    <div class="logo">
      <img :src="loginlogo" alt="">
    </div>
    <div class="loginbox">
      <div class="image">
        <img :src="logindesc" alt="">
      </div>
      <loginForm v-if="status === STATUS.LOGIN" @update="handleStatus" />
      <RegisterForm v-if="status === STATUS.REGISTER" @update="handleStatus" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import loginlogo from '@/assets/login_logo.png'
import logindesc from '@/assets/login_desc.png'
import SvgIcon from '@/components/common/SvgIcon.vue';
import loginForm from './login-form.vue';
import RegisterForm from './register-form.vue';
import { STATUS } from './datas'
const status = ref(STATUS.LOGIN)
const handleStatus = (value: string) => {
  status.value = value
}
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
  }
}
</style>
