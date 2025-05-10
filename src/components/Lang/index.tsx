import { useTranslation } from 'react-i18next'

function Language() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='flex gap-4'>
      <button
        onClick={() => changeLanguage('es')}
        className={`md:w-6/12 h-5/6 border rounded-lg p-2 mt-2 flex flex-col items-center transition ${i18n.language === 'es' ? 'ring-2 ring-Primary bg-blue-50 dark:bg-Text ' : 'hover:border-Secondary'
          }`}
      >
        <div className='flex items-center gap-2'>
          <div className={`w-4 h-4 rounded-full border ${i18n.language === 'es' ? 'bg-Primary' : ''
            }`}></div>
          <span className='text-sm'>{t('idiomas.espanol')}</span>
        </div>
      </button>

      <button
        onClick={() => changeLanguage('en')}
        className={`md:w-6/12 h-5/6 border rounded-lg p-2 mt-2 flex flex-col items-center transition ${i18n.language === 'en' ? 'ring-2 ring-Primary bg-blue-50 dark:bg-Text' : 'hover:border-Secondary'
          }`}
      >
        <div className='flex items-center gap-2'>
          <div className={`w-4 h-4 rounded-full border ${i18n.language === 'en' ? 'bg-Primary' : ''
            }`}></div>
          <span className='text-sm'>{t('idiomas.ingles')}</span>
        </div>
      </button>
    </div>
  )
}

export { Language }
