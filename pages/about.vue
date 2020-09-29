<template>
  <page-contant title="About">
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
            <div :key="info.contant" class="col-start-2 col-span-2 md:col-span-3">
              {{ info.contant }}
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
      companyInfo: [
        {
          title: '会社名',
          contant: '株式会社OwN (英: OwN.inc)'
        },
        {
          title: '代表取締役',
          contant: '粕尾 拓未'
        },
        {
          title: '資本金',
          contant: '400,000円'
        },
        {
          title: 'メンバー数',
          contant: '3名 (役員、アルバイトを含む)'
        },
        {
          title: '所在地',
          contant: '〒141-0022 東京都品川区東五反田5丁目22-37'
        }
      ]
    }
  },
  head (): MetaInfo {
    return {
      title: 'About'
    }
  }
})
</script>

<style>

</style>
