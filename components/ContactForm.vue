<template>
  <ValidationObserver v-slot="{ valid }" class="w-full max-w-lg bg-white border-2 border-gray-100 shadow-lg p-6 rounded-lg z-20">
    <div v-if="show" class="flex flex-wrap mb-6">
      <div class="text-2xl font-semibold">
        {{ $t('contact-page.form.thanks') }}
      </div>
      <i18n path="contact-page.form.thanks-message" tag="p" class="mt-2">
        <template #br>
          <br>
        </template>
      </i18n>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
      <ValidationProvider v-slot="{ errors }" :name="$t('contact-page.form.name')" rules="required" class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ $t('contact-page.form.name') }}
        </label>
        <input v-model="form.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" :disabled="isDisable">
        <p class="text-red-600 text-xs italic h-4">
          {{ errors[0] }}
        </p>
      </ValidationProvider>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
      <ValidationProvider v-slot="{ errors }" :name="$t('contact-page.form.email')" rules="required|email" class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ $t('contact-page.form.email') }}
        </label>
        <input v-model="form.email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" :disabled="isDisable">
        <p class="text-red-600 text-xs italic h-4">
          {{ errors[0] }}
        </p>
      </ValidationProvider>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
      <ValidationProvider v-slot="{ errors }" :name="$t('contact-page.form.message')" rules="required" class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ $t('contact-page.form.message') }}
        </label>
        <textarea v-model="form.message" class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" :disabled="isDisable" />
        <p class="text-red-600 text-xs italic h-4">
          {{ errors[0] }}
        </p>
      </ValidationProvider>
    </div>
    <TealButton v-if="!isDisable" :is-disable="!valid" @click="uploadFormData()">
      <Icon v-if="loading" class="iconify mr-2 -ml-1 animate-spin" icon="mdi:loading" />
      <Icon v-else icon="bx:bx-send" class="mr-2" />
      {{ $t('contact-page.form.send') }}
    </TealButton>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      show: false,
      isDisable: false,
      loading: false
    }
  },
  methods: {
    async uploadFormData () {
      this.loading = true
      await this.$axios.$post('/form-api/form-api-production-form', this.form)
      this.loading = false
      this.show = true
      this.isDisable = true
    }
  }
})
</script>

<style>

</style>
