<template>
  <div class="w-full max-w-lg bg-white border-2 border-gray-100 shadow-lg p-6 rounded-lg z-20">
    <div v-if="show" class="flex flex-wrap mb-6">
      <div class="text-2xl font-semibold">
        お問い合わせありがとうございました!
      </div>
      <p class="mt-2">
        以下の内容でお問い合わせを受付いたしました。
        2営業日以内に担当よりご連絡致しますので今しばらくお待ちくださいませ。
      </p>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ $t('contact-page.form.name') }}
        </label>
        <input v-model="form.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" :disabled="isDisable">
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
        <input v-model="form.email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" :disabled="isDisable">
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
        <textarea v-model="form.message" class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" :disabled="isDisable" />
      </div>
    </div>
    <div v-if="!isDisable" class="md:flex md:items-center">
      <div class="md:w-1/3">
        <TealButton @click="uploadFormData()">
          {{ $t('contact-page.form.send') }}
        </TealButton>
      </div>
      <div class="md:w-2/3" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      show: false,
      isDisable: false
    }
  },
  methods: {
    async uploadFormData () {
      await this.$axios.$post(process.env.URL + '/contactform', this.form)
      this.show = true
      this.isDisable = true
    }
  }
}
</script>

<style>

</style>
