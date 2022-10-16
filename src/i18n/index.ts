import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translations from './locales'

const i18nConfig = {
  resources: translations,  
  fallbackLng: 'pt-BR',     
  defaultNS: 'translations', 
  lng: "en-US",
  react:{useSuspense:false}
}
i18n
  .use(initReactI18next)
  .init(i18nConfig)
export default i18n