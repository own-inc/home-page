<template>
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs bg-white">
        <div class="px-5">
          <div class="flex items-center justify-between border-b-2 py-4">
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
          <div class="py-6">
            <nav class="grid gap-y-8">
              <NuxtLink v-for="(item, n) in navItems" :key="n" :to="localePath(item.link)" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <Icon :icon="item.icon" class="flex-shrink-0 text-teal-400 text-2xl" />
                <div class="text-base leading-6 font-medium text-gray-900">
                  {{ item.title }}
                </div>
              </NuxtLink>
            </nav>
          </div>
          <div v-if="showLogin" class="py-6 space-y-6 border-t-2">
            <span class="w-full flex rounded-md shadow-sm">
              <NuxtLink :to="localePath('/')" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:border-teal-500 focus:shadow-outline-teal active:bg-teal-500 transition ease-in-out duration-150">
                {{ $t('header.auth.sign-up') }}
              </NuxtLink>
            </span>
            <p class="text-center text-base leading-6 font-medium text-gray-500">
              {{ $t('header.auth.existing-customer') }}
              <NuxtLink :to="localePath('/')" class="text-teal-400 hover:text-teal-300 transition ease-in-out duration-150">
                {{ $t('header.auth.sign-in') }}
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    navItems: {
      type: Array,
      default () {
        return []
      }
    },
    showLogin: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>

</style>
