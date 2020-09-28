<template>
  <nav class="hidden md:flex space-x-10 px-6">
    <a href="/#services" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      Services
    </a>
    <nuxt-link to="/" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      News
    </nuxt-link>
    <nuxt-link to="/" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      About
    </nuxt-link>
    <nuxt-link to="/" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      Contact
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
