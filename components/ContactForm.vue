<template>
  <form class="w-full max-w-lg bg-white border-2 border-gray-100 shadow-lg p-6 rounded-lg z-20">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ $t('contact-page.form.name') }}
        </label>
        <input id="nick" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text">
        <p class="text-gray-600 text-xs italic">
          {{ $t('contact-page.form.require') }}
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ $t('contact-page.form.email') }}
        </label>
        <input id="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email">
        <p class="text-gray-600 text-xs italic">
          {{ $t('contact-page.form.require') }}
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ $t('contact-page.form.message') }}
        </label>
        <textarea id="message" class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" />
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <TealButton>
          {{ $t('contact-page.form.send') }}
        </TealButton>
      </div>
      <div class="md:w-2/3" />
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
