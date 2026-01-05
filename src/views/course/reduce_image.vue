<template>
  <section class="reduce_image">
   <img :src="image" alt="">
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const props = defineProps({
  imag: {
    type: String,
    required: true,
    default: '',
  },
})
const image = computed(() => {
  return new URL(`../../assets/${props?.imag}`, import.meta.url).href
})
</script>
<style lang="scss" scoped>
.reduce_image{
  background-color: transparent;
  img {
    display: block;
      background-color: transparent;

  }
}
</style>
