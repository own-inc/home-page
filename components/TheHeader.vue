<template>
  <header class="fixed inset-x-0 top-0 z-50 layer-blur">
    <div class="relative">
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div class="flex items-center justify-between py-6 border-b-2 border-gray-100 md:space-x-10">
          <div>
            <logo />
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" @click.stop="showMenu = !showMenu">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <laptop-nav :nav-items="navItems" />
          <div v-if="showLogin" class="items-center justify-end hidden space-x-8 md:flex md:flex-1">
            <a href="#" class="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-gray-900 focus:outline-none focus:text-gray-900">
              {{ $t('header.auth.sign-in') }}
            </a>
            <TealButton>
              {{ $t('header.auth.sign-up') }}
            </TealButton>
          </div>
        </div>
      </div>
      <mobile-nav v-show="showMenu" :nav-items="navItems" :show-login="showLogin" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showMenu: false,
      showLogin: false
    }
  },
  computed: {
    navItems () {
      return [
        {
          title: this.$t('header.nav.news'),
          link: { name: 'news' },
          icon: 'bx:bx-news'
        },
        {
          title: this.$t('header.nav.about'),
          link: { name: 'about' },
          icon: 'bx:bx-building'
        },
        {
          title: this.$t('header.nav.contact'),
          link: { name: 'contact' },
          icon: 'bx:bx-comment-detail'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('click', () => {
      this.showMenu = false
    })
  }
})
</script>

<style scoped>
.layer-blur {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
