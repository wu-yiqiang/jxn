<template>
  <img :src="imgs" />
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const props = defineProps({
  target: {
    type: String,
    required: true,
    default: '',
  },
})
const imgs = computed(() => {
  return new URL(`../../assets/${props?.target}`, import.meta.url).href
})
</script>
<style lang="scss" scoped>
// img{
//   flex: 1;
// }
</style>
