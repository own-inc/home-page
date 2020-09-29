<template>
  <div class="h-screen overflow-hidden">
    <Header />
    <div class="hidden md:block fixed inset-y-0 right-0 z-40">
      <Links />
    </div>
    <div class="h-full pt-18 md:pt-22 z-0 overflow-auto flex flex-col">
      <main class="flex-auto p-6">
        <Nuxt />
      </main>
      <footer class="-mt-10">
        <copyright />
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head () {
    return this.$nuxtI18nSeo()
  }
})
</script>
