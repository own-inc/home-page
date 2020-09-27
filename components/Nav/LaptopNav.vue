<template>
  <nav class="hidden md:flex space-x-10">
    <div class="relative">
      <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
      <button id="serviceBtn" type="button" class="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150" @click.stop="showService = !showService">
        <span>Services</span>
        <!--
              Heroicon name: chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
        <svg class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <ServiceCard v-show="showService" />
    </div>

    <a href="#" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      News
    </a>
    <a href="#" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      About
    </a>
    <a href="#" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      Contact
    </a>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showService: false
    }
  },
  mounted () {
    window.addEventListener('click', (e) => {
      this.showService = false
    })
  }
}
</script>

<style>

</style>
