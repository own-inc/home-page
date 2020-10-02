<template>
  <section :id="$attrs.id" class="flex flex-col items-center min-h-full">
    <div class="w-full flex flex-col items-center">
      <div class="w-px h-14 bg-teal-400" />
      <div class="w-6 h-6 rounded-full bg-teal-400 -mt-1" />
    </div>
    <h1 class="text-3xl font-light mt-2">
      {{ title }}
    </h1>
    <div class="flex-auto w-full mt-16">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
})
</script>

<style>

</style>
