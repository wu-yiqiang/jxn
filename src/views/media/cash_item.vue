<template>
  <section class="cash_item">
    <img :src="image" alt="">
    <div class="title">{{ title }}</div>
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
  image: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.cash_item{
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  .title {
    font-size: 20px;
    font-weight: 500;
    display: grid;
    row-gap: 20px;
    margin-top: 10px;
  }
}
</style>
