import { useTranslation } from 'react-i18next'

import {
  Popover,
  PopoverTrigger,
} from '@/components/ui/popover'
import { MenuPop } from '@/components/MenuFilter'
import { Masonrys } from '@/components/Masonrry'

import { IoFilter } from 'react-icons/io5'


function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className='flex items-center justify-center gap-4 my-4'>
        <input
          type='text'
          placeholder={t('buscar')}
          className='w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-Primary'
          aria-label='Buscar Imagen..'
        />
        <Popover>
          <PopoverTrigger className='flex items-center justify-center w-10 h-10 bg-Primary text-white rounded-lg hover:bg-Secondary focus:outline-none'>
            <IoFilter size={20} />
          </PopoverTrigger>
          <MenuPop />
        </Popover>
      </div>
      <Masonrys />
    </>

  )
}

export { Home }