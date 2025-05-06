import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '@/config/lang/en/en.json'
import translationES from '@/config/lang/es/es.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React ya escapa valores por seguridad
    },
  });

export default i18n;
