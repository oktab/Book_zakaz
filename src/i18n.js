import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUZ from './locales/uz/translation.json';
import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  uz: { translation: translationUZ },
  ru: { translation: translationRU },
  en: { translation: translationEN },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'uz',
    fallbackLng: 'uz',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
    },
  });
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});
export const getApiLanguage = () => {
  return (i18n.language || 'uz').toUpperCase();
};

export default i18n;
