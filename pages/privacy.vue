<template>
  <div class="container min-h-screen px-4 py-6 mx-auto lg:max-w-4xl md:py-12">
    <a href="#" class="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900" @click.prevent="goBack()">
      <Icon icon="bx:bx-arrow-back" />
      <p>{{ $t('privacy-page.go-back') }}</p>
    </a>
    <h1 class="mt-4 text-2xl text-teal-500 md:text-4xl md:mt-8">
      {{ news.title }}
    </h1>
    <div class="mt-4 md:mt-8">
      <NuxtContent
        class="prose-sm prose sm:prose lg:prose-lg"
        :document="news"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  async asyncData ({ $content, app, error }) {
    const path = `/${app.i18n.locale}/privacy`
    let news

    try {
      news = await $content(path).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
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
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
})
</script>

<style>

</style>
