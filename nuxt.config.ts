import { NuxtConfig } from '@nuxt/types'
import i18n from './nuxt-i18n.config'

const config: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: c => c ? `${c} | OwN Inc.` : 'OwN Inc. - own-auth.io',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'OwN Inc.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.URL || 'https://dev.own-auth.io'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.URL || 'https://dev.own-auth.io'}/own-card.png`
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${process.env.URL || 'https://dev.own-auth.io'}/own-card.png`
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'OwN Inc.'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@own_id' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${process.env.URL || 'https://dev.own-auth.io'}/own-card.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
    ]
  },
  css: [
    '@/assets/css/main.css'
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
