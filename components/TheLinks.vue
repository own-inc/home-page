<template>
  <aside class="hidden md:flex fixed inset-y-0 right-0 z-40 flex-col pr-6 justify-center h-full space-y-4 text-4xl">
    <a class="hover:text-teal-300 p-2" href="https://github.com/own-inc" target="_blank">
      <Icon icon="bx:bxl-github" />
    </a>
    <a class="hover:text-teal-300 p-2" href="https://twitter.com/own_id" target="_blank">
      <Icon icon="bx:bxl-twitter" />
    </a>
    <NuxtLink class="hover:text-teal-300 p-2" :to="localePath('/contact/')">
      <Icon icon="bx:bx-mail-send" />
    </NuxtLink>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="p-2"
    >
      <Icon icon="clarity:language-line" />
    </NuxtLink>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    availableLocales () {
      // @ts-ignore
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
})
</script>

<style>

</style>
