import type { NuxtVueI18n } from 'nuxt-i18n'
import { locales, dateTimeFormats } from './locales'

const options: NuxtVueI18n.Options.AllOptionsInterface = {
  baseUrl: process.env.URL || 'https://dev.own-auth.io',
  langDir: 'locales/',
  strategy: 'prefix_except_default',
  defaultLocale: 'ja',
  seo: false,
  lazy: true,
  vueI18n: {
    fallbackLocale: 'ja',
    dateTimeFormats
  },
  locales,
  parsePages: false
}

export default options
