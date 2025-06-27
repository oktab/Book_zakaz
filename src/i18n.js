// src/i18.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUZ from './locales/uz/translation.json';
import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: translationUZ },
            ru: { translation: translationRU },
            en: { translation: translationEN },
        },
        lng: 'uz',
        fallbackLng: 'uz',
        interpolation: { escapeValue: false },
    });

export default i18n;
