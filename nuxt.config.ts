import { NuxtConfig } from '@nuxt/types'
import i18n from './nuxt-i18n.config'

const siteURL = process.env.URL || 'https://dev.own-auth.io'

const config: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: c => c ? `${c} | 株式会社OwN` : '株式会社OwN - own-auth.io',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: '株式会社OwN' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: siteURL
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${siteURL}/own-card.png`
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${siteURL}/own-card.png`
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: '株式会社OwN'
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
        content: `${siteURL}/own-card.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
    ]
  },
  css: [],
  plugins: [
    '~/plugins/validate.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    'nuxt-purge-icons-module',
    '@nuxtjs/netlify-files',
    '@nuxtjs/google-analytics'
  ],
  modules: [
    '@nuxt/content',
    ['nuxt-i18n', i18n],
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || 'https://dev.own-auth.io',
    URL: siteURL
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  build: {
    postcss: {},
    transpile: [
      'vee-validate/dist/rules'
    ]
  },
  purgeIcons: {
  },
  generate: {
    fallback: true,
    async routes () {
      const { $content } = require('@nuxt/content')
      let routes: string[]
      const defaultLocalePaths = await $content(i18n.defaultLocale, { deep: true }).only(['path']).fetch()
      routes = defaultLocalePaths.map((route: { path: string }) => route.path.replace(`/${i18n.defaultLocale}/`, '/') + '/')

      i18n.locales?.forEach((local: any) => {
        if (local.code !== i18n.defaultLocale) {
          const newRoutes = routes.map((route: string) => {
            return route.replace('/', `/${local.code}/`)
          })
          routes = routes.concat(newRoutes)
        }
      })
      return routes
    }
  },
  router: {
    trailingSlash: true
  },
  sitemap: {
    hostname: siteURL,
    gzip: true,
    i18n: true
  },
  robots: {
    Sitemap: `${siteURL}/sitemap.xml`
  },
  axios: {
    baseURL: siteURL
  },
  googleAnalytics: {
    dev: false,
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  netlifyFiles: {
    netlifyToml: {
      headers: [
        {
          for: '/*',
          values: {
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block'
          }
        }
      ],
      redirects: [
        {
          from: '/form-api/*',
          to: process.env.FORM_API + '/:splat',
          status: 200,
          force: true
        },
        {
          from: '/*',
          to: '/404.html',
          status: 404
        }
      ]
    }
  }
}

export default config
