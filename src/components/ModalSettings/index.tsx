
import { ThemeSelector } from '@/components/ThemeSwitcher'
import { Language } from '@/components/Lang'
import { Notifications } from '@/components/Notifications'

import { IoSettingsOutline, IoLogOutOutline  } from 'react-icons/io5'
import { LiaUserFriendsSolid, LiaUser } from 'react-icons/lia'
import { MdOutlinePrivacyTip } from "react-icons/md"

export function ModalSettings() {
  return (
    <div className='grid grid-cols-4 border-2 grid-rows-1 gap-2 m-4 rounded-md min-h-[60vh]'>
      <div className='col-start-1 row-start-1 col-span-1 row-span-1 border-r-2 p-4 h-full'>

        <div className='flex md:items-start flex-col space-y-4'>
          <h1 className='text-sm md:text-2xl font-bold mb-5'>Settings</h1>

          <hr className='w-full border' />

          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full py-2'>
            <IoSettingsOutline size={24} />
            <span className='ml-2 text-xl hidden md:inline'>General</span>
          </button>
          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full py-2'>
            <LiaUserFriendsSolid size={24} />
            <span className='ml-2 text-xl hidden md:inline'>Grupos</span>
          </button>
          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full py-2'>
            <LiaUser size={24} />
            <span className='ml-2 text-xl hidden md:inline'>Cuenta</span>
          </button>
          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full py-2'>
            <MdOutlinePrivacyTip size={24} />
            <span className='ml-2 text-xl hidden md:inline'>Terminos y condiciones</span>
          </button>
          <button className='flex items-start hover:text-Primary hover:bg-gray-300 hover:rounded-2xl hover:cursor-pointer w-full py-2'>
            <IoLogOutOutline size={24} />
            <span className='ml-2 text-xl hidden md:inline'>Cerrar sesión</span>
          </button>

        </div>
      </div>

      <div className='col-start-2 row-start-1 col-span-3 row-span-1 rounded-md p-4 max-h-[60vh] overflow-y-auto'>
        <h1>Themes</h1>
        <p>Choose your favorite Theme</p>
        <ThemeSelector />
        <hr className='border-1 mt-5' />
        <h2 className='mt-5'>Language</h2>
        <p>Choose your preferred language</p>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          <Language />
        </div>

        <hr className='border-1 mt-5' />
        <h2 className='mt-5'>Notifications</h2>
        <p>Manage your notifications</p>
        <div className='gap-4 mt-2'>
          <Notifications />
        </div>
      </div>
    </div>

  )
}
