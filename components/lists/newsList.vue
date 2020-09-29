<template>
  <div class="inline-flex flex-col space-y-5 items-center justify-center w-full md:mt-8 text-xs md:text-lg">
    <div v-for="(item, n) in news" :key="n" class="inline-flex space-x-3 md:space-x-12 items-center justify-center w-full">
      <p class="leading-relaxed">
        {{ item.date }}
      </p>
      <div class="w-40">
        <div class="flex items-center justify-center px-3 py-1 w-full border rounded-full border-teal-400">
          {{ item.type }}
        </div>
      </div>
      <div class="leading-relaxed">
        {{ item.message }}
      </div>
    </div>
  </div>
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
            date: '2020/09/25',
            type: 'お知らせ',
            message: 'ここには、お知らせの文章が入ります××××××××××××××××'
          }
        ]
      }
    }
  }
})
</script>

<style>

</style>
