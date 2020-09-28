<template>
  <a :href="to" :class="$attrs.class">
    <img class="h-6 w-auto sm:h-8" src="~/assets/logo.svg" alt="OwN">
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      default: '/'
    }
  }
})
</script>

<style>
</style>
