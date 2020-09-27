<template>
  <div class="flex flex-col items-center">
    <div class="w-full flex flex-col items-center pt-0">
      <div class="w-px h-14 bg-teal-300" />
      <div class="w-6 h-6 rounded-full bg-teal-300 -mt-1" />
    </div>
    <h1 class="text-2xl font-light mt-2">
      Service
    </h1>
    <div class="w-full mt-6">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style>

</style>
