import { NuxtConfig } from '@nuxt/types'
import i18n from './nuxt-i18n.config'

const config: NuxtConfig = {
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    }
  },
  purgeIcons: {
  },
  generate: {
    fallback: true
  }
}

export default config
