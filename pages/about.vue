<template>
  <page-contant title="About" /></page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head (): MetaInfo {
    return {
      title: 'About'
    }
  }
})
</script>

<style>

</style>
