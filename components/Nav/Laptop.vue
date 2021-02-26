<template>
  <nav class="hidden md:flex px-4">
    <NuxtLink v-for="item in navItems" :key="item.title" :to="localePath(item.link)" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 py-2 px-6">
      {{ item.title }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    navItems: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      showService: false
    }
  },
  mounted () {
    window.addEventListener('click', () => {
      this.showService = false
    })
  }
})
</script>

<style>

</style>
