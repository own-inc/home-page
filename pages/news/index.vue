<template>
  <page-contant :title="$t('news-page.title')" class="px-4 pb-12 min-h-screen">
    <news-list :news="news" class="animate__animated animate__fadeIn" />
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  async asyncData ({ $content, app }) {
    let news = await $content(`${app.i18n.defaultLocale}/news`)
      .only(['title', 'type', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        const newNews = await $content(`${app.i18n.locale}/news`)
          .only(['title', 'type', 'slug', 'createdAt'])
          .sortBy('createdAt', 'desc')
          .fetch()

        news = news.map((news: any) => {
          const item = newNews.find((newNews: { slug: string }) => newNews.slug === news.slug)
          return item || news
        })
      } catch (err) {}
    }

    return {
      news
    }
  },
  head (): MetaInfo {
    return {
      title: this.$tc('news-page.title')
    }
  }
})
</script>

<style>

</style>
