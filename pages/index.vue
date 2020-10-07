<template>
  <section class="flex flex-col md:flex-row md:w-3/4 relative mx-auto py-12 md:py-24 xl:py-32 p-4 min-h-screen">
    <div class="flex flex-col w-full items-start m-none">
      <h1 class="text-5xl xl:text-6xl font-semibold leading-tight animate__animated animate__fadeInUp">
        {{ $t('homepage.main.title') }}
      </h1>
      <h2 class="text-lg mt-8 md:w-2/3 animate__animated animate__fadeInUp">
        {{ $t('homepage.main.subtitle') }}
      </h2>
      <div class="inline-flex items-center mt-8 animate__animated animate__fadeIn">
        <div class="h-px w-8 bg-black mr-4" />
        <nuxt-link :to="localePath('/services/')" class="inline-flex hover:text-teal-300 items-center text-2xl">
          <Icon icon="bx:bx-link" class="mr-4 text-3xl" />
          <span class="border-b-2">
            {{ $t('homepage.main.checkService') }}
          </span>
        </nuxt-link>
      </div>
    </div>
    <div class="mt-16 w-1/2 md:w-2/5 self-end">
      <img src="~/assets/image/bro.svg" alt="Javascript frameworks" class="w-full animate__animated animate__fadeIn">
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
</style>
