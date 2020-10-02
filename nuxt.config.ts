import { NuxtConfig } from '@nuxt/types'
import i18n from './nuxt-i18n.config'

const config: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: c => c ? `${c} | OwN Inc.` : 'OwN Inc. - own-auth.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'OwN Inc.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@own_id' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    'nuxt-purge-icons-module'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    ['nuxt-i18n', i18n],
    '@nuxtjs/sitemap'
  ],
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || 'https://dev.own-auth.io',
    URL: process.env.URL || 'https://dev.own-auth.io'
  },
  content: {
  },
  build: {
    postcss: {}
  },
  purgeIcons: {
  },
  generate: {
    fallback: true
  },
  router: {
    trailingSlash: true
  },
  sitemap: {
    hostname: process.env.URL || 'https://dev.own-auth.io',
    gzip: true,
    i18n: true
  }
}

export default config
