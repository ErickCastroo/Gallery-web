import { Masonrys } from '@/components/Masonrry'
import { IoFilter } from 'react-icons/io5'


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
        <button
          className='bg-Primary text-white rounded-lg flex items-center justify-center p-2 hover:bg-Secondary cursor-pointer transition duration-300 ease-in-out'
          title='Filtrar resultados'
        >
          <IoFilter className='text-2xl' />
        </button>
      </div>
      <Masonrys />
    </>

  )
}

export { Home }