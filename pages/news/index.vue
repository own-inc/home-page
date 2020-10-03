<template>
  <page-contant :title="$t('news-page.title')" class="px-4 pb-12 min-h-screen">
    <news-list :news="news" />
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  async asyncData ({ $content, app }) {
    const path = `${app.i18n.defaultLocale}`

    let news = await $content(path, 'news')
      .sortBy('date', 'desc')
      .fetch()

    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        const newPosts = await $content(app.i18n.locale, 'news')
          .sortBy('date', 'desc')
          .fetch()
        news = news.map((news: any) => {
          const newNews = newPosts.find((newNews: { slug: string }) => newNews.slug === news.slug)
          return newNews || news
        })
      } catch (err) {}
    }

    return {
      news
    }
  },
  data () {
    return {
      news: []
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
