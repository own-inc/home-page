<template>
  <div class="h-screen overflow-hidden">
    <Header />
    <div class="hidden md:block fixed inset-y-0 right-0">
      <Links />
    </div>
    <div class="pt-18 h-full overflow-auto p-6">
      <page-contant>
        <Nuxt />
      </page-contant>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head () {
    const baseUrl = `${process.env.URL}/`
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
