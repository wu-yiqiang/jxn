<template>
  <section class="theme" >
  <div class="title">{{ title }}</div>
  <div class="sectitle">{{ secTitle }}</div>
  <div class="contents">
    <slot />
  </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  secTitle: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.theme{
  .title {
    font-size: 30px;
    text-align: center;
    font-weight: 500;
  }
  .sectitle {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
    color: #666666;
  }
  .contents {
    width: 100%;
  }
}
</style>
