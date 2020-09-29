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
        <services-list :services="devServices" />
      </div>
      <div class="w-full md:w-auto p-3">
        <button class="btn w-full">
          お問い合わせはこちらから
        </button>
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
