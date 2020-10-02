<template>
  <page-contant title="Contact">
    <div class="relative flex h-full w-full">
      <div class="absolute box" />
    </div>
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head (): MetaInfo {
    return {
      title: this.$tc('contact-page.title')
    }
  }
})
</script>

<style>
.box {
  border-top: 100% solid #008ce6;
  border-right: 100% solid transparent;
}
</style>
