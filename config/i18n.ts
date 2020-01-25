import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en';
import fr from '../locales/fr';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',

    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
