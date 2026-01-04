<template>
  <section class="tabs">
    <div class="title">全省分校</div>
    <div class="location">
      <div
        v-for="(location, index) in locations"
        :key="index"
        :class="location.location === val ? 'tab selected' : 'tab'"
        @click="handleSelected(location?.location)"
      >
        {{ location.location }}
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { locations } from './datas'
const emit = defineEmits(['update:value'])
const props = defineProps({
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
const handleSelected = (value: string) => {
  val.value = value
}
</script>
<style lang="scss" scoped>
.tabs {
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  .title {
    font-weight: 600;
    font-size: 16px;
  }
  .location {
    margin-top: 30px;
    display: grid;
    row-gap: 40px;
    .tab {
      cursor: pointer;
      text-align: center;
      font-weight: 500;
      padding: 6px 10px;
      &:hover {
        color: #00baff;
      }
    }
  }
  .selected {
    color: #00baff;
    background-color: #e3f5fd;
    border-radius: 2px;
  }
}
</style>
