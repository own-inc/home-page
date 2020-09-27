<template>
  <div class="flex p-6 h-full relative">
    <div class="flex flex-col w-full md:w-1/2 h-full lg:justify-center items-start m-none lg:ml-64 md:ml-32">
      <h1 class="text-5xl md:text-6xl">
        技術で課題をブチ破る
      </h1>
      <h2 class="text-lg mt-16">
        Front-end Develope, Web Application Develope. iOS App Develope. etc...
      </h2>
      <div class="inline-flex items-center mt-6">
        <div class="h-px w-8 bg-black mr-4" />
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
        <nuxt-link class="text-2xl" to="/about">
          About
        </nuxt-link>
      </div>
    </div>
    <div class="absolute bottom-0 right-0 w-full p-10 md:p-20 md:pr-32 flex justify-end">
      <img src="~/assets/image/bro.svg" alt="" class="w-2/3 md:w-2/5 lg:w-1/5">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
</style>
