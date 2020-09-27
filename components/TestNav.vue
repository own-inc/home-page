<template>
  <header class="fixed w-full z-40">
    <!-- This example requires Tailwind CSS v1.4.0+ -->
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="lg:w-0 lg:flex-1">
            <a href="#" class="flex">
              <img class="h-6 w-auto sm:h-8" src="~/assets/logo.svg" alt="OwN">
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click.stop="showMenu = !showMenu">
              <!-- Heroicon name: menu -->
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <laptop-nav />
        </div>
      </div>
      <MobileNav v-show="showMenu" />
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  mounted () {
    window.addEventListener('click', (e) => {
      this.showMenu = false
    })
  }
}
</script>

<style>

</style>
