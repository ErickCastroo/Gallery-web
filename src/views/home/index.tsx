import { Masonrys } from '@/components/Masonrry'
import { IoFilter } from 'react-icons/io5'

import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MenuPop } from '@/components/MenuFilter'



function Home() {
  return (
    <>
      <h1 className='text-2xl font-semibold text-center my-4'>  </h1>
      <div className='flex items-center justify-center gap-4 my-4'>
        <input
          type='text'
          placeholder='Buscar Imagen...'
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