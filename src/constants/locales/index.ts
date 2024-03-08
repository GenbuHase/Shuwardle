import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en'
import ja from './ja'

export const locales = {
  en,
  ja,
}

i18n.use(initReactI18next).init({
  resources: locales,

  lng: 'ja',
  fallbackLng: 'en',
})

export default i18n
