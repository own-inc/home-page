<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div v-if="error.statusCode === 404" class="animate-appear w-2/3 md:w-1/4 flex justify-center">
      <img src="~/assets/image/rafiki.svg" alt="">
    </div>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link class="btn mt-16" to="/">
      Home page
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default () {
        return { statusCode: 404 }
      }
    }
  },
  head () {
    const baseUrl = process.env.baseUrl
    const { path } = this.$router
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    return {
      link: [
        { rel: 'canonical', href: `${baseUrl}${pathWithSlash}` }
      ]
    }
  }
})
</script>

<style>

</style>
