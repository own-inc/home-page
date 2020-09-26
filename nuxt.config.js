import { locales } from './locales'
export default {
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
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-i18n'
  ],
  content: {
  },
  build: {
  },
  purgeIcons: {
  },
  i18n: {
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  }
}
