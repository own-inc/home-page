<template>
  <page-contant title="Services">
    <div class="flex flex-col items-center space-y-8 md:space-y-16 pb-6">
      <div class="flex flex-col space-y-6 md:space-y-12">
        <div class="text-center">
          <h3 class="text-sm">
            全てのアカウントを一つにまとめる
          </h3>
          <h2 class="text-2xl">
            OwN Social Login Service
          </h2>
        </div>
        <div class="flex flex-col md:flex-row space-y-4 md:space-x-4 items-center">
          <div>
            <img src="~/assets/image/app-login.svg" alt="App Login" class="-mt-2 h-48 md:h-64">
          </div>
          <div class="text-center text-sm">
            <p>SNS連携したサービスを使う時、</p>
            <p class="text-orange-500">
              「あれ、どのアカウントでログインしてたっけ？」
            </p>
            <p>という経験ありませんか？</p>
            <p class="pt-2" />
            <p>その問題、私たちが解決します！</p>
            <button class="btn mt-6">
              Comming soon...
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-6 md:space-y-12">
        <div class="text-center">
          <h3 class="text-sm">
            お客様のアイディアを形に
          </h3>
          <h2 class="text-2xl">
            OwN Development Service
          </h2>
        </div>
        <div class="flex flex-col md:flex-row md:w-4/5 mx-auto">
          <div v-for="(item, index) in devServices" :key="index" class="flex flex-col space-y-4 items-center mt-6">
            <div>
              <img :src="item.image" alt="Build Web" class="h-48">
            </div>
            <div class="text-left text-sm px-6">
              <h4 class="text-xl">
                {{ item.title }}
              </h4>
              <p class="mt-2">
                {{ item.context }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-auto p-6">
        <button class="px-8 btn w-full">
          お問い合わせはこちらから
        </button>
      </div>
    </div>
  </page-contant>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      devServices: [
        {
          title: 'Webアプリケーション',
          context: 'ECサイトや情報検索システム、業務用Webシステムなど様々なWebアプリケーションを作成致します。',
          image: require('~/assets/image/build-web.svg')
        },
        {
          title: 'スマートフォンアプリ',
          context: '企画、UIデザイン、アプリ開発、バックエンド開発までお客様に合わせてご提案させていただきます。',
          image: require('~/assets/image/cellphone.svg')
        },
        {
          title: 'LP,コーポレートページ',
          context: 'お客様のサービス内容や予算に合わせて最適なWebサイトをご提案・作成致します。',
          image: require('~/assets/image/computer.svg')
        }
      ]
    }
  }
})
</script>

<style>

</style>
