<template>
  <div class="h-screen overflow-hidden">
    <Header />
    <div class="hidden md:block fixed inset-y-0 right-0 z-40">
      <Links />
    </div>
    <div class="h-full pt-18 md:pt-20 z-0">
      <main class="h-full overflow-auto p-6">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head () {
    const baseUrl = process.env.baseUrl
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    return {
      link: [
        { rel: 'canonical', href: `${baseUrl}${pathWithSlash}` }
      ]
    }
  }
})
</script>
