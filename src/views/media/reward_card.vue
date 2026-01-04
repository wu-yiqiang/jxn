<template>
  <section class="reward_card">
    <div class="title">
      <div class="index">{{ index }}</div>
      {{ title }}
    </div>
    <slot></slot>
  </section>
</template>
<script lang="ts" setup>
const props = defineProps({
  index: {
    type: String,
    required: true,
    default: '',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.reward_card {
  flex: 1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  height: 360px;
  background-image: url('../../assets/reward_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .title {
    margin-top: 90px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: center;
    .index {
      color: #3874f6;
    }
  }
}
</style>
