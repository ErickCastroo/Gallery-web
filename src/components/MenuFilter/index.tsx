import {
  PopoverContent,
} from "@/components/ui/popover"

function MenuPop() {
  return (
    <>
      <PopoverContent className='w-48 p-4 bg-white shadow-lg rounded-lg'>
        <h2 className='text-lg font-semibold mb-2 text-Primary'>Filtros</h2>
        <div className='flex flex-col space-y-2 text-Text'>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            Acendente
          </label>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            Decendente
          </label>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            Fecha
          </label>
        </div>
      </PopoverContent>
    </>
  )
}

export { MenuPop }