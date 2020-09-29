<template>
  <div class="overflow-hidden">
    <Header />
    <main class="p-6 pt-18 md:pt-22">
      <Nuxt />
    </main>
    <Footer />
    <Links />
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
