import type { NuxtVueI18n } from 'nuxt-i18n'
import { locales } from './locales'

const options: NuxtVueI18n.Options.AllOptionsInterface = {
  baseUrl: process.env.URL,
  langDir: 'locales',
  strategy: 'prefix_except_default',
  locales,
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en'
  }
}

export default options
