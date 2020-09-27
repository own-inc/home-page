<template>
  <header>
    <div class="fixed w-full h-16 flex border-b items-center px-6 justify-between">
      <nuxt-link class="w-20" to="/">
        <img src="~/assets/logo.svg" alt="Logo">
      </nuxt-link>
      <div class="flex items-center">
        <nuxt-link v-for="item in navItems" :key="item.link" class="text-md px-2 mx-2" :to="item.link">
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

interface link {
  title: string
  link: string
}

export default Vue.extend({
  data () {
    return {
      navItems: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Services',
          link: '/services'
        },
        {
          title: 'News',
          link: '/news'
        },
        {
          title: 'About',
          link: '/about'
        },
        {
          title: 'Contact',
          link: '/contact'
        }
      ] as Array<link>
    }
  }
})
</script>

<style>
</style>
