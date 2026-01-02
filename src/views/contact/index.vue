<template>
  <section class="Contact">
    <Banner :banner="bannercontact" />
    <div class="content">
      <Tabs v-model:value="location" />
      <Pannel :info="locations?.find(item => item.location == location)"/>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Banner from '@/components/common/banner.vue'
import bannercontact from '@/assets/banner_contact.png'
import Tabs from './tabs.vue';
import Pannel from './pannel.vue';
import {locations} from './datas'
const location = ref('保定')
</script>
<style lang="scss" scoped>
.Contact{
  padding: 0 100px;
  padding-bottom: 20px;
  .content {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
  }
}
</style>
