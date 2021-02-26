<template>
  <div class="p-4">
    <section class="relative flex flex-col min-h-screen py-12 mx-auto md:flex-row md:w-3/4 md:py-24 xl:py-32">
      <div class="flex flex-col items-start w-full m-none">
        <h1 class="text-5xl font-semibold leading-tight text-transparent xl:text-6xl animate__animated animate__fadeInUp bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
          {{ $t('homepage.main.title') }}
        </h1>
        <h2 class="mt-8 text-lg md:w-2/3 animate__animated animate__fadeInUp">
          {{ $t('homepage.main.subtitle') }}
        </h2>
        <div class="inline-flex items-center mt-8 animate__animated animate__fadeIn">
          <div class="w-8 h-px mr-4 bg-black" />
          <a href="#" class="inline-flex items-center text-2xl hover:text-teal-300">
            <Icon icon="bx:bx-link" class="mr-4 text-3xl" />
            <span class="border-b-2">
              {{ $t('homepage.main.checkService') }}
            </span>
          </a>
        </div>
      </div>
      <div class="self-end w-1/2 mt-16 md:w-2/5">
        <img src="~/assets/image/bro.svg" alt="Javascript frameworks" class="w-full animate__animated animate__fadeIn">
      </div>
    </section>
    <section class="container flex-col items-center mx-auto space-y-24 text-base md:space-y-32 animate__animated animate__fadeIn">
      <div class="flex flex-col space-y-6 md:space-y-12">
        <div class="text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
          <h2>{{ $t('services-page.title') }}</h2>
        </div>
        <div class="text-center">
          <h3>
            {{ $t('services-page.login-service.subtitle') }}
          </h3>
          <h2 class="text-2xl md:text-3xl">
            {{ $t('services-page.login-service.title') }}
          </h2>
        </div>
        <div class="flex flex-col items-center mx-auto space-y-4 md:flex-row md:space-x-4">
          <div>
            <img src="~/assets/image/app-login.svg" alt="App Login" class="h-48 md:h-64">
          </div>
          <div class="text-center md:text-lg">
            <p>{{ $t('services-page.login-service.content.1') }}</p>
            <p class="text-orange-500">
              {{ $t('services-page.login-service.content.2') }}
            </p>
            <p>{{ $t('services-page.login-service.content.3') }}</p>
            <p class="pt-2" />
            <p>{{ $t('services-page.login-service.content.4') }}</p>
            <button class="mt-6 text-base btn-bk">
              {{ $t('services-page.login-service.btn.coming-soon') }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-6 md:space-y-12">
        <div class="text-center">
          <h3>
            {{ $t('services-page.dev-services.subtitle') }}
          </h3>
          <h2 class="text-2xl md:text-3xl">
            {{ $t('services-page.dev-services.title') }}
          </h2>
        </div>
        <ListServices :services="devServices" />
      </div>
      <div class="flex flex-col items-center pb-20">
        <div class="mb-4">
          <svg
            class="w-6 h-6 text-gray-900 animate-bounce"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <div class="flex-shrink-0">
          <NuxtLink :to="localePath('/contact/')" class="px-5 py-3 text-base text-white whitespace-no-wrap bg-teal-400 rounded-md bg-none hover:bg-teal-300 focus:outline-none md:text-lg">
            {{ $t('services-page.dev-services.btn.contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      devServices: [
        {
          title: this.$t('services-page.dev-services.web.title'),
          context: this.$t('services-page.dev-services.web.content'),
          image: require('~/assets/image/build-web.svg')
        },
        {
          title: this.$t('services-page.dev-services.app.title'),
          context: this.$t('services-page.dev-services.app.content'),
          image: require('~/assets/image/cellphone.svg')
        },
        {
          title: this.$t('services-page.dev-services.lp.title'),
          context: this.$t('services-page.dev-services.lp.content'),
          image: require('~/assets/image/computer.svg')
        }
      ]
    }
  }
})
</script>

<style>
</style>
