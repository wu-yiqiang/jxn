<template>
  <section class="tabbar">
    <div class="leftbox">
      <img :src="xjnlogo" alt="" />
    </div>
    <div class="middlebox">
      <div v-for="(tab, index) in tabs" :key="index" class="tab" @click="handleSelect(tab?.value)">
        <div class="title">{{ tab?.label }}</div>
        <div :class="val === tab?.value ? 'bar checked' : 'bar'"></div>
      </div>
    </div>
    <div class="rightbox" @click="handleLogin">注册/登录</div>
  </section>
</template>
<script lang="ts" setup>
import xjnlogo from '@/assets/jxnlogo.png'
import router from '@/router'
import { computed } from 'vue'
const emit = defineEmits(['update:value'])
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => [],
  },
  value: {
    type: String,
    required: true,
    default: '',
  },
})
const val = computed({
  get() {
    return props.value
  },
  set(val) {
    emit('update:value', val)
  },
})
const handleSelect = (value: string) => {
  val.value = value
}
const handleLogin = () => {
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  background-color: rgba(0, 186, 255, 1);
  padding: 0 var(--padding-width);
  height: 60px;
  column-gap: 20px;
  align-items: center;

  .leftbox {
    font-size: 13px;
  }

  .middlebox {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 30px;

    .tab {
      font-size: 18px;
      color: white;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      .bar {
        width: 100%;
        height: 4px;
        margin-top: 10px;
        border-radius: 2px;
      }
      .checked {
        background-color: rgba(254, 185, 3, 1);
      }
    }
  }

  .rightbox {
    display: flex;
    column-gap: 20px;
    align-content: center;
    font-size: 17px;
    color: white;
    cursor: pointer;
  }
}
</style>
