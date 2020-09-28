<template>
  <nav class="hidden md:flex space-x-10 px-6">
    <nuxt-link v-for="item in navItems" :key="item.title" :to="item.link" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      {{ item.title }}
    </nuxt-link>
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
