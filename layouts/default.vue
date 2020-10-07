<template>
  <div>
    <TheHeader />
    <main class="pt-18 md:pt-22">
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

    const title = this.$t('homepage.meta.title') as string
    const description = this.$t('homepage.meta.description') as string

    return {
      htmlAttrs: i18nSeo.htmlAttrs,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
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
