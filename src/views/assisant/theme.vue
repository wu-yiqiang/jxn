<template>
  <section class="theme" >
  <div class="title">{{ title }}</div>
  <div class="sectitle">{{ secTitle }}</div>
  <div class="contents" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
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
  backgroundImage: {
    type: String,
    required: true,
    default: '',
  },
})
const image = computed(() => {
  return new URL(`../../assets/${props?.backgroundImage}`, import.meta.url).href
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
    // background-image: url('../../assets/assistant1.png');
    // background-image: url(v-bind(image.value));
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    padding: 50px 80px;
  }
}
</style>
