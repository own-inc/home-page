<template>
  <page-contant :title="$t('services-page.title')" class="px-4 pb-12">
    <div class="container flex-col items-center space-y-8 md:space-y-16 mx-auto">
      <div class="flex flex-col space-y-6 md:space-y-12">
        <div class="text-center">
          <h3 class="text-sm">
            {{ $t('services-page.login-service.subtitle') }}
          </h3>
          <h2 class="text-2xl">
            {{ $t('services-page.login-service.title') }}
          </h2>
        </div>
        <div class="flex flex-col md:flex-row space-y-4 md:space-x-4 items-center mx-auto">
          <div>
            <img src="~/assets/image/app-login.svg" alt="App Login" class="-mt-2 h-48 md:h-64">
          </div>
          <div class="text-center text-sm">
            <p>{{ $t('services-page.login-service.content.1') }}</p>
            <p class="text-orange-500">
              {{ $t('services-page.login-service.content.2') }}
            </p>
            <p>{{ $t('services-page.login-service.content.3') }}</p>
            <p class="pt-2" />
            <p>{{ $t('services-page.login-service.content.4') }}</p>
            <button class="btn mt-6">
              {{ $t('services-page.login-service.btn.coming-soon') }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-6 md:space-y-12">
        <div class="text-center">
          <h3 class="text-sm">
            {{ $t('services-page.dev-services.subtitle') }}
          </h3>
          <h2 class="text-2xl">
            {{ $t('services-page.dev-services.title') }}
          </h2>
        </div>
        <services-list :services="devServices" />
      </div>
      <div class="flex p-3 justify-center">
        <nuxt-link :to="localePath('/contact/')" class="btn">
          {{ $t('services-page.dev-services.btn.contact') }}
          </button>
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
