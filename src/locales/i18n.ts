import { createI18n } from 'vue-i18n'
import vi from './vi.json'
import en from './en.json'

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'vi', 
  fallbackLocale: 'en',
  messages: { vi, en },
})