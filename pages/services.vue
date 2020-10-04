<template>
  <page-contant :title="$t('services-page.title')" class="px-4 pb-12">
    <div class="container flex-col items-center space-y-24 md:space-y-32 mx-auto text-base animate__animated animate__fadeIn">
      <div class="flex flex-col space-y-6 md:space-y-12">
        <div class="text-center">
          <h3>
            {{ $t('services-page.login-service.subtitle') }}
          </h3>
          <h2 class="text-2xl md:text-3xl">
            {{ $t('services-page.login-service.title') }}
          </h2>
        </div>
        <div class="flex flex-col md:flex-row space-y-4 md:space-x-4 items-center mx-auto">
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
            <button class="btn-bk mt-6 text-base">
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
        <services-list :services="devServices" />
      </div>
      <div class="flex p-3 justify-center">
        <nuxt-link :to="localePath('/contact/')" class="btn-bk text-base md:text-lg">
          {{ $t('services-page.dev-services.btn.contact') }}
        </nuxt-link>
      </div>
    </div>
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

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
  },
  head (): MetaInfo {
    return {
      title: this.$tc('services-page.title')
    }
  }
})
</script>

<style>

</style>
