<template>
  <div class="py-8 px-6 text-white">
    <div class="flex flex-col max-w-screen-sm mx-auto">
      <div class="w-full text-center">
        <div class="text-xl md:text-3xl font-light inline-flex items-center">
          <Icon icon="bx:bx-news" class="h-6 w-6 text-2xl mr-3" />
          <p>{{ $t('newsletter.title') }}</p>
        </div>
        <p class="text-gray-300 mt-4">
          {{ $t('newsletter.subtitle') }}
        </p>
      </div>
      <div class="flex flex-col mt-8 text-sm md:text-lg">
        <div class="flex h-12 space-x-6">
          <input type="email" class="flex-auto text-gray-500 px-3 py-2 rounded-lg hover:border-2 border focus:outline-none" placeholder="E-Mailアドレスを入力してください">
          <TheButton>
            {{ $t('newsletter.subscribe-btn') }}
          </TheButton>
        </div>
        <a href="#" class="text-xs self-end mt-4 text-gray-300 hover:text-gray-500">
          {{ $t('newsletter.privacy-policy') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
