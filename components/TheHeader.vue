<template>
  <header class="fixed inset-x-0 top-0 z-50 layer-blur">
    <div class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
          <div>
            <logo />
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click.stop="showMenu = !showMenu">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <laptop-nav :nav-items="navItems" />
          <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1">
            <a href="#" class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Sign in
            </a>
            <span class="inline-flex rounded-md shadow-sm">
              <a href="#" class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:border-teal-500 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
      <mobile-nav v-show="showMenu" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showMenu: false,
      navItems: [
        {
          title: 'Services',
          link: '/services/',
          icon: ''
        },
        {
          title: 'News',
          link: '/news/',
          icon: ''
        },
        {
          title: 'About',
          link: '/about/',
          icon: ''
        },
        {
          title: 'Contact',
          link: '/contact/',
          icon: ''
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

<style>

</style>
