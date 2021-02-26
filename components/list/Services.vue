<template>
  <div class="flex flex-col md:flex-row md:w-4/5 mx-auto">
    <div v-for="(item, index) in services" :key="index" class="flex flex-col space-y-4 items-center mt-6">
      <div>
        <img :src="item.image" alt="Build Web" class="h-48">
      </div>
      <div class="text-left px-3">
        <h4 class="text-xl md:text-2xl">
          {{ item.title }}
        </h4>
        <p class="mt-2">
          {{ item.context }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    services: {
      type: Array,
      default () {
        return []
      }
    }
  }
})
</script>

<style>

</style>
