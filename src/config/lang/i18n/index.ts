import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '@/config/lang/en/en.json';
import translationES from '@/config/lang/es/es.json';

// Cuando el usuario cambia de idioma (por ejemplo, a 'en' o 'es')
export const cambiarIdioma = (nuevoIdioma: string) => {
  i18n.changeLanguage(nuevoIdioma); // Cambia el idioma de i18next
  localStorage.setItem('idiomaPreferido', nuevoIdioma); // Guarda en localStorage
};

const idiomaGuardado = localStorage.getItem('idiomaPreferido') || 'es'; // Si no hay, default 'es'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    lng: idiomaGuardado,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React ya escapa valores por seguridad
    },
  });

export default i18n;
