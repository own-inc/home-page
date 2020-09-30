<template>
  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
        <div class="py-4 px-5">
          <div class="flex items-center justify-between">
            <logo />
            <div class="-mr-2">
              <button type="button')" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-300 transition duration-150 ease-in-out">
                <!-- Heroicon name: x -->
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="my-6">
            <nav class="grid gap-y-8">
              <nuxt-link :to="localePath('/services/')" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: chart-bar -->
                <svg class="flex-shrink-0 h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div class="text-base leading-6 font-medium text-gray-900">
                  Services
                </div>
              </nuxt-link>
              <nuxt-link :to="localePath('/news/')" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: cursor-click -->
                <svg class="flex-shrink-0 h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <div class="text-base leading-6 font-medium text-gray-900">
                  News
                </div>
              </nuxt-link>
              <nuxt-link :to="localePath('/about/')" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: shield-check -->
                <svg class="flex-shrink-0 h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div class="text-base leading-6 font-medium text-gray-900">
                  About
                </div>
              </nuxt-link>
              <nuxt-link :to="localePath('/contact/')" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <!-- Heroicon name: view-grid -->
                <svg class="flex-shrink-0 h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <div class="text-base leading-6 font-medium text-gray-900">
                  Contact
                </div>
              </nuxt-link>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <span class="w-full flex rounded-md shadow-sm">
            <nuxt-link :to="localePath('/')" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:border-teal-500 focus:shadow-outline-teal active:bg-teal-500 transition ease-in-out duration-150">
              Sign up
            </nuxt-link>
          </span>
          <p class="text-center text-base leading-6 font-medium text-gray-500">
            Existing customer?
            <nuxt-link :to="localePath('/')" class="text-teal-400 hover:text-teal-300 transition ease-in-out duration-150">
              Sign in
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>

</style>
