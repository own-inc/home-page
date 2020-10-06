<template>
  <button class="whitespace-no-wrap text-white bg-none px-4 py-2 bg-teal-400 rounded-md  hover:bg-teal-300 focus:outline-none" @click="doClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    doClick () {
      this.$emit('click')
    }
  }
})
</script>

<style scoped>

</style>
