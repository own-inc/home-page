<template>
  <footer class="px-4 md:px-6" style="background: linear-gradient(135deg, rgba(1,220,186,1), rgba(127,48,203,1));">
    <NewsletterForm />
    <div class="w-full border-t-2 border-gray-400 py-2 inline-flex justify-between items-center text-gray-900">
      <p class="font-medium text-sm md:text-base">
        Copiright © 2020 OwN. All rights reserved.
      </p>
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="block md:hidden"
      >
        <Icon icon="clarity:language-line" class="text-4xl" />
      </NuxtLink>
    </div>
  </footer>
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
