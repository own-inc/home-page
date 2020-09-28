<template>
  <div class="flex justify-center items-center">
    <h1>About</h1>
  </div>
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
