import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import ja from 'vee-validate/dist/locale/ja.json'

localize({
  en,
  ja
})

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  })
}

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// @ts-ignore
export default function ({ app }) {
  localize(app.i18n.locale)
  app.i18n.onLanguageSwitched = (_oldLocale: string, newLocale: string) => {
    localize(newLocale)
  }
}
