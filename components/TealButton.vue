<template>
  <button class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:border-teal-500 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150" @click="doClick">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    doClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
