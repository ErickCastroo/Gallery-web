import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useModal } from '@/context/modalContext'

import { BsImages } from 'react-icons/bs'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { IoSettingsOutline } from 'react-icons/io5'

import { ModalSettings } from '@/components/ModalSettings'

function Layout() {
  const { openModal } = useModal()

  const { t } = useTranslation()

  const handleSettingsClick = () => {
    openModal(<ModalSettings closeModal={function (): void {
      throw new Error('Function not implemented.')
    } } />)
  }

  return (
    <>
      <div className='flex flex-col h-screen w-full bg-gray-100 dark:bg-gray-900'>
        <header className='shrink-0 flex items-center justify-between p-5  bg-Secondary text-white'>
          <h1 className='text-2xl md:ml-16'>
            <Link to='/home'>
              Gollery
            </Link>
          </h1>

          <nav className='hidden md:flex space-x-10 mr-16'>
            <Link to='/home' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
              <BsImages />
              <span className='text-xs'>{t('galeria')}</span>
            </Link>
            <Link to='/grupos' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
              <LiaUserFriendsSolid />
              <span className='text-xs'>{t('grupos')}</span>
            </Link>
            <button
              onClick={handleSettingsClick}
              className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
              <IoSettingsOutline />
              <span className='text-xs'>{t('configuracion')}</span>
            </button>
          </nav>
        </header>

        <main className='flex-grow overflow-y-auto p-4 bg-Background'>
          <Outlet />
        </main>

        <footer className='shrink-0 grid grid-cols-3 bg-Secondary h-20 items-center justify-items-center text-center text-white md:hidden'>
          <Link to='/home' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
            <BsImages />
            <span className='text-xs'>{t('galeria')}</span>
          </Link>
          <Link to='/grupos' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
            <LiaUserFriendsSolid />
            <span className='text-xs'>{t('grupos')}</span>
          </Link>
          <button
            onClick={handleSettingsClick}
            className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
            <IoSettingsOutline />
            <span className='text-xs'>{t('configuracion')}</span>
          </button>
        </footer>
      </div>
    </>
  )
}

export { Layout }