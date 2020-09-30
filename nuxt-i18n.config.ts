import type { NuxtVueI18n } from 'nuxt-i18n'
import { locales } from './locales'

const options: NuxtVueI18n.Options.AllOptionsInterface = {
  baseUrl: process.env.URL || 'https://dev.own-auth.io',
  langDir: 'locales/',
  strategy: 'prefix_except_default',
  defaultLocale: 'ja',
  lazy: true,
  vueI18n: {
    fallbackLocale: 'ja'
  },
  locales
}

export default options
