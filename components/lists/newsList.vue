<template>
  <table class="table-auto text-xs md:text-lg mx-auto">
    <tbody class="divide-y divide-gray-400">
      <NuxtLink v-for="item in news" :key="item.slug" :to="localePath({ name: 'news-slug', params: { slug: item.slug } })" tag="tr" class="hover:text-gray-600 cursor-pointer">
        <td class="p-2 md:p-4">
          {{ $d(new Date(item.createdAt), 'dateTime') }}
        </td>
        <td class="p-2 md:p-4 whitespace-no-wrap">
          <span class="px-2 py-1 md:px-3 md:py-2 border rounded-full border-teal-400 md:text-base">
            {{ item.type }}
          </span>
        </td>
        <td class="p-4p-2 md:p-4 w-3/5">
          {{ item.title }}
        </td>
      </NuxtLink>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    news: {
      type: Array,
      default () {
        return [
          {
            createdAt: '2020/09/25',
            type: 'お知らせ',
            title: 'ここには、お知らせの文章が入ります××××××××××××××××'
          }
        ]
      }
    }
  }
})
</script>

<style>

</style>
