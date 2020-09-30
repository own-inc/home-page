<template>
  <div>
    <TheHeader />
    <main class="p-6 pt-18 md:pt-22">
      <Nuxt />
    </main>
    <TheFooter />
    <TheLinks />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head (): MetaInfo {
    const i18nSeo = this.$nuxtI18nSeo()
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    const canonical = `${process.env.URL}${pathWithSlash}`

    return {
      htmlAttrs: i18nSeo.htmlAttrs,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$tc('homepage.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$tc('homepage.meta.description')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$tc('homepage.meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$tc('homepage.meta.description')
        },
        ...i18nSeo.meta || []
      ],
      link: [
        { rel: 'canonical', href: canonical },
        ...i18nSeo.link || []
      ]
    }
  }
})
</script>
