import { useTranslation } from 'react-i18next'

import { Switch } from '@/components/ui/switch'


function Notifications() {

  const { t } = useTranslation()
  return (
    <>
      <div className='bg-gray-50 min-w-5/6 h-14 rounded-md flex items-center justify-between p-4'>
        <h1 className=''>{t('marketingEmails')}</h1>
        <Switch />
      </div>
    </>
  )
}

export { Notifications }