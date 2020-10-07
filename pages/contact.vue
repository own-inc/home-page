<template>
  <page-contant :title="$t('contact-page.title')">
    <div class="relative flex w-full justify-center pt-16 pb-48 px-4 animate__animated animate__fadeIn">
      <div class="absolute top-0 left-0 bg-polygon-1 w-full h-full bg-teal-400 z-0" />
      <div class="absolute top-0 left-0 bg-polygon-2 w-full h-full bg-gray-300 z-10" />
      <!-- component -->
      <ContactForm />
    </div>
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head (): MetaInfo {
    const title = this.$t('contact-page.title') as string

    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title }
      ]
    }
  }
})
</script>

<style>
.bg-polygon-1 {
  clip-path: polygon(0 60%, 100% 0%, 100% 100%, 0% 100%);
}
.bg-polygon-2 {
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0% 100%);
}
</style>
