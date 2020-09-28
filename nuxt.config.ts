import { NuxtConfig } from '@nuxt/types'
import i18n from './nuxt-i18n.config'

const config: NuxtConfig = {
  mode: 'universal',
  target: 'static',
  head: {
    titleTemplate: c => c ? `${c} | OwN Inc.` : 'OwN Inc. - own-auth.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are a tech company that build Web application, Smartphone Apps, Corporate website or Landing page, we also run our own auth service OwN Auth.' }
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
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    ['nuxt-i18n', i18n]
  ],
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
  }
}

export default config
