<template>
  <section class="flex flex-col md:flex-row md:w-3/4 relative justify-center mx-auto py-8 md:py-24 xl:py-32">
    <div class="flex flex-col w-full items-start m-none">
      <h1 class="text-5xl xl:text-6xl font-semibold">
        技術で課題をブチ破る
      </h1>
      <h2 class="text-lg mt-8 w-2/3">
        Develop Web application, Smartphone Apps, Corporate website or Landing page, we also run our own auth service OwN Auth.
      </h2>
      <div class="inline-flex items-center mt-6">
        <div class="h-px w-8 bg-black mr-4" />
        <nuxt-link to="/services/" class="inline-flex hover:text-teal-300 items-center">
          <div class="w-8 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              role="img"
              class="iconify iconify--bx"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              style="transform: rotate(360deg);"
            ><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707l1.414-1.414l-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071a4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707l-1.414-1.414l-.707.707a3.007 3.007 0 0 1-4.243 0a3.005 3.005 0 0 1 0-4.243l2.122-2.121z" fill="currentColor" /><path d="M12 4.929l-.707.707l1.414 1.414l.707-.707a3.007 3.007 0 0 1 4.243 0a3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414l.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071a5.006 5.006 0 0 0-7.071 0z" fill="currentColor" /></svg>
          </div>
          <span class="relative text-2xl z-10 border-b-2">
            Check our services
          </span>
        </nuxt-link>
      </div>
    </div>
    <div class="pt-8 md:pt-48 w-1/2 md:w-2/5 self-end">
      <img src="~/assets/image/bro.svg" alt="" class="w-full">
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
</style>
