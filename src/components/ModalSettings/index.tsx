import { useTranslation } from 'react-i18next'


import { ThemeSelector } from '@/components/ThemeSwitcher'
import { Language } from '@/components/Lang'
import { Notifications } from '@/components/Notifications'

import { IoSettingsOutline, IoLogOutOutline  } from 'react-icons/io5'
import { LiaUserFriendsSolid, LiaUser } from 'react-icons/lia'
import { MdOutlinePrivacyTip } from "react-icons/md"

export function ModalSettings() {

  const { t } = useTranslation()

  return (
    <div className='grid grid-cols-4 border-2 grid-rows-1 gap-2 m-4 rounded-md min-h-[60vh]'>
      <div className='col-start-1 row-start-1 col-span-1 row-span-1 border-r-2 p-4 h-full'>

        <div className='flex md:items-start flex-col space-y-4'>
          <h1 className='md:flex hidden md:text-2xl font-bold md:mb-5'>{t('configuracion')}</h1>

          <hr className='w-full border hidden md:flex' />

          <button className='flex items-start text-Primary bg-gray-300 rounded-2xl hover:cursor-pointer w-full p-2'>
            <IoSettingsOutline  className=' md:flex' size={24} />
            <span className='ml-2 text-xl hidden md:inline'>{t('general')}</span>
          </button>
          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full p-2'>
            <LiaUserFriendsSolid size={24} />
            <span className='ml-2 text-xl hidden md:inline'>{t('grupos')}</span>
          </button>
          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full p-2'>
            <LiaUser size={24} />
            <span className='ml-2 text-xl hidden md:inline'>{t('cuenta')}</span>
          </button>
          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full p-2'>
            <MdOutlinePrivacyTip size={24} />
            <span className='ml-2 text-xl hidden md:inline'>{t('privacidad')}</span>
          </button>
          <button className='flex items-start hover:text-red-600 hover:bg-red-100 hover:rounded-2xl hover:cursor-pointer w-full mt-36 p-2'>
            <IoLogOutOutline size={24} />
            <span className='ml-2 text-xl hidden md:inline'>{t('cerrarSesion')}</span>
          </button>

        </div>
      </div>

      <div className='col-start-2 row-start-1 col-span-3 row-span-1 rounded-md p-4 max-h-[60vh] overflow-y-auto'>
        <h1 className='text-xl font-semibold'>{t('tema')}</h1>
        <p>{t('elegirTema')}</p>
        <ThemeSelector />
        <hr className='border-1 mt-4' />
        <h2 className='mt-4 text-xl font-semibold'>{t('idioma')}</h2>
        <p>{t('idiomaPreferido')}</p>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          <Language />
        </div>

        <hr className='border-1 mt-4' />
        <h2 className='mt-4 text-xl font-semibold'>{t('notificaciones')}</h2>
        <p>{t('gestionaTusNotificaciones')}</p>
        <div className='gap-4 mt-2'>
          <Notifications />
        </div>
      </div>
    </div>

  )
}
