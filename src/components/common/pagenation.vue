<template>
  <section class="pagenation">
    <div class="nation">
      <div class="total">共 {{ total }} 条</div>
      <el-pagination
        background
        layout="prev, pager, next"
        v-model:current-page="pageNo"
        :pageSize="pageSize"
        :total="total"
        @current-change="handleChange"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const emit = defineEmits(['change'])
const pageNo = ref(1)
const props = defineProps({
  total: {
    type: Number,
    required: true,
    default: null,
  },
  pageSize: {
    type: Number,
    required: true,
    default: null,
  },
})
const handleChange = () => {
  emit('change', pageNo.value)
}
</script>
<style lang="scss" scoped>
.pagenation {
  display: flex;
  align-items: center;
  justify-content: center;
  .nation {
    display: flex;
    align-items: center;
    .total {
      font-size: 14px;
      color: #606266;
    }
  }
}
</style>
