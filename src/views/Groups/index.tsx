import { useTranslation } from 'react-i18next'

import {
  Popover,
  PopoverTrigger,
} from '@/components/ui/popover'
import { MenuPop } from '@/components/MenuFilter'

import { IoFilter } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Grupos = [
  {
    nombre: 'Grupo 1',
    descripcion: 'Descripcion del grupo 1',
    imagen: 'https://fastly.picsum.photos/id/813/200/200.jpg?hmac=KPqV3ldCcUrVRZi3-HZU491hRCs8AZAagGXxoAomcYU',
    miembros: 10
  },
  {
    nombre: 'Grupo 2',
    descripcion: 'Descripcion del grupo 2',
    imagen: 'https://fastly.picsum.photos/id/316/200/200.jpg?hmac=f0i62VkjVy8OPLP77Xf7mdZa3UBNlTOXFm9WpDMOiiA',
    miembros: 20
  },
  {
    nombre: 'Grupo 3',
    descripcion: 'Descripcion del grupo 3',
    imagen: 'https://fastly.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0',
    miembros: 30
  },
  {
    nombre: 'Grupo 4',
    descripcion: 'Descripcion del grupo 4',
    imagen: 'https://fastly.picsum.photos/id/813/200/200.jpg?hmac=KPqV3ldCcUrVRZi3-HZU491hRCs8AZAagGXxoAomcYU',
    miembros: 40
  },
  {
    nombre: 'Grupo 5',
    descripcion: 'Descripcion del grupo 5',
    imagen: 'https://fastly.picsum.photos/id/813/200/200.jpg?hmac=KPqV3ldCcUrVRZi3-HZU491hRCs8AZAagGXxoAomcYU',
    miembros: 50
  },
  {
    nombre: 'Grupo 6',
    descripcion: 'Descripcion del grupo 6',
    imagen: 'https://fastly.picsum.photos/id/813/200/200.jpg?hmac=KPqV3ldCcUrVRZi3-HZU491hRCs8AZAagGXxoAomcYU',
    miembros: 60
  },
  {
    nombre: 'Grupo 7',
    descripcion: 'Descripcion del grupo 7',
    imagen: 'https://fastly.picsum.photos/id/813/200/200.jpg?hmac=KPqV3ldCcUrVRZi3-HZU491hRCs8AZAagGXxoAomcYU',
    miembros: 70
  }
]

function Groups() {
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

        {/* <div className='absolute bottom-10 right-10 bg-gray-400 text-white rounded-full w-20 h-20 flex items-center justify-center'>
          <FaUserPlus size={30} />
        </div> */}
      </div>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-4 h-auto'>
        {
          Grupos.map((group, index) => (
            <Link to={`/grupos/${group.nombre}`} key={index}>
              <div
                className='flex flex-col justify-end bg-white shadow-md rounded-lg p-4 h-48 text-white relative overflow-hidden'
                style={{
                  backgroundImage: `url(${group.imagen})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <h3 className='text-lg font-bold'>{group.nombre}</h3>
                <p className='text-sm text-gray-600'>{group.descripcion}</p>
                <p className='text-sm text-gray-600'>{group.miembros} miembros</p>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export { Groups }