import { useTranslation } from 'react-i18next'

function Language() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className='bg-Primary rounded-lg p5 cursor-pointer' onClick={() => changeLanguage('es')}>Español</button>
      <button className='bg-Primary rounded-lg p5 cursor-pointer' onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export { Language }
