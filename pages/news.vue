<template>
  <page-contant :title="$t('news-page.title')" class="p-4">
    <news-list :news="newsData" />
    <div class="w-full flex justify-center mt-12">
      <button class="btn">
        Read More
      </button>
    </div>
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  data () {
    return {
      newsData: [
        {
          date: this.$d(new Date('2020/09/25'), 'date'),
          type: 'お知らせ',
          message: 'ここには、お知らせの文章が入ります××××××××××××××××'
        },
        {
          date: this.$d(new Date('2020/09/25'), 'date'),
          type: 'お知らせ',
          message: 'ここには、お知らせの文章が入ります××××××××××××××××'
        },
        {
          date: this.$d(new Date('2020/09/25'), 'date'),
          type: 'お知らせ',
          message: 'ここには、お知らせの文章が入ります××××××××××××××××'
        },
        {
          date: this.$d(new Date('2020/09/25'), 'date'),
          type: 'お知らせ',
          message: 'ここには、お知らせの文章が入ります××××××××××××××××'
        },
        {
          date: this.$d(new Date('2020/09/25'), 'date'),
          type: 'お知らせ',
          message: 'ここには、お知らせの文章が入ります××××××××××××××××'
        }
      ]
    }
  },
  head (): MetaInfo {
    return {
      title: 'News'
    }
  }
})
</script>

<style>

</style>
