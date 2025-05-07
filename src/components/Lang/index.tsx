import { useTranslation } from 'react-i18next'

function Language() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex gap-4'>
      <button
        onClick={() => changeLanguage('es')}
        className={`w-6/12 h-5/6 border rounded-lg p-2 mt-4 flex flex-col items-center transition ${i18n.language === 'es' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:border-blue-400'
          }`}
      >
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full border ${i18n.language === 'es' ? 'bg-blue-500' : ''
            }`}></div>
          <span className="text-sm">Español</span>
        </div>
      </button>

      <button
        onClick={() => changeLanguage('en')}
        className={`w-6/12 h-5/6 border rounded-lg p-2 mt-4 flex flex-col items-center transition ${i18n.language === 'en' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:border-blue-400'
          }`}
      >
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full border ${i18n.language === 'en' ? 'bg-blue-500' : ''
            }`}></div>
          <span className="text-sm">English</span>
        </div>
      </button>
    </div>
  );
}

export { Language }
