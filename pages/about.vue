<template>
  <page-contant :title="$t('about-page.title')" class="p-4">
    <div class="flex flex-col items-center md:items-start md:flex-row md:w-2/3 h-full mx-auto md:mt-8">
      <div class="w-1/2 xl:w-1/3 mb-8 md:mr-8 lg:mr-16">
        <img src="~/assets/image/company.svg" alt="Company" class="w-full">
      </div>
      <div class="flex md:space-x-6 md:text-xl">
        <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
          <template v-for="info in companyInfo">
            <div :key="info.title" class="col-start-1">
              {{ info.title }}
            </div>
            <div :key="info.content" class="col-start-2 col-span-2 md:col-span-3">
              {{ info.content }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  data () {
    return {
      companyInfo: this.$t('about-page.componyInfo')
    }
  },
  head (): MetaInfo {
    return {
      title: this.$tc('about-page.title')
    }
  }
})
</script>

<style>

</style>
