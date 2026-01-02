<template>
  <section class="Banner">
   <img :src="banner" />
  </section>
</template>
<script lang="ts" setup>
const props = defineProps({
  banner: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.Banner{
  padding: 20px 0;
  img {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
