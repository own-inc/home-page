import en from './en.json'
import ja from './ja.json'

export interface locale {
  code: string
  name: string
  iso: string
  file: string
  description: string
}

export const messages = {
  en,
  ja
}

export const locales: Array<locale> = [
  {
    code: 'ja',
    name: '日本語',
    iso: 'ja-JP',
    file: 'ja.json',
    description: 'Japanese'
  },
  {
    code: 'en',
    name: 'English',
    iso: 'en-US',
    file: 'en.json',
    description: 'English'
  }
]

export const dateTimeFormats = {
  en: {
    date: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    dateTime: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  ja: {
    date: {
      year: 'numeric', month: '2-digit', day: '2-digit'
    },
    dateTime: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  }
}
