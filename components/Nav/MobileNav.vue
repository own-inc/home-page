<template>
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
                <Icon icon="bx:bxl-dev-to" class="flex-shrink-0 text-teal-400 text-2xl" />
                <div class="text-base leading-6 font-medium text-gray-900">
                  Services
                </div>
              </nuxt-link>
              <nuxt-link :to="localePath('/news/')" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <Icon icon="bx:bx-news" class="flex-shrink-0 h-6 w-6 text-teal-400 text-2xl" />
                <div class="text-base leading-6 font-medium text-gray-900">
                  News
                </div>
              </nuxt-link>
              <nuxt-link :to="localePath('/about/')" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <Icon icon="bx:bx-buildings" class="flex-shrink-0 h-6 w-6 text-teal-400 text-2xl" />
                <div class="text-base leading-6 font-medium text-gray-900">
                  About
                </div>
              </nuxt-link>
              <nuxt-link :to="localePath('/contact/')" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <Icon icon="bx:bx-comment-detail" class="flex-shrink-0 h-6 w-6 text-teal-400 text-2xl" />
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
