<template>
  <div class="container lg:max-w-4xl mx-auto py-6 md:py-12 min-h-screen px-4">
    <nuxt-link :to="localePath({ name: 'news' })" class="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
      <Icon icon="bx:bx-arrow-back" />
      <p>{{ $t('news-page.news.go-back') }}</p>
    </nuxt-link>
    <h1 class="text-2xl md:text-4xl text-teal-500 mt-4 md:mt-8">
      {{ news.title }}
    </h1>
    <div class="mt-4 md:mt-8">
      <NuxtContent
        class="prose prose-sm sm:prose lg:prose-lg"
        :document="news"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  async asyncData ({ $content, app, params, error }) {
    const { slug } = params
    let path = `/${app.i18n.defaultLocale}/news`
    let news

    try {
      news = await $content(path, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        path = `/${app.i18n.locale}/news`
        news = await $content(path, slug).fetch()
      } catch (err) {
        path = `/${app.i18n.defaultLocale}/news`
      }
    }

    return {
      news
    }
  },
  head (): MetaInfo {
    const title = (this as any).news.title
    const description = (this as any).news.description

    return {
      title: (this as any).news.title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  }
})
</script>

<style>

</style>
