import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import EnLang from './en/en';
import RuLang from './ru/ru';

const Languages = ['en', 'ru'];

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    preload: ['ru'],
    whitelist: Languages,
    resources: {
      en: {
        langName: "English",
        translation: EnLang,
      },
      ru: {
        langName: "Русский",
        translation: RuLang,
      },
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
