
import { IoSettingsOutline } from "react-icons/io5"
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { LiaUser } from "react-icons/lia"


export function ModalSettings() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-2 md:gap-2 m-5">
      <div className="col-start-1 row-start-1 row-span-3 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-3 border-r-2 rounded-md p-5">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-gray-500">Configure your preferences</p>
        <hr  className='mb-10'/>
          <div className='flex text-xl items-center gap-1 hover:text-Primary'>
            <IoSettingsOutline />
            <span className='text-2xl'>General</span>
        </div>
        <hr  className='mb-5'/>
        <div className='flex text-xl items-center gap-1 hover:text-Primary'>
            <LiaUserFriendsSolid />
            <span className='text-2xl'>Grupos</span>
        </div>
        <hr  className='mb-5'/>
        <div className='flex text-xl items-center gap-1 hover:text-Primary'>
            <LiaUser />
            <span className='text-2xl'>Cuenta</span>
        </div>
        <hr  className='mb-5'/>
      </div>
      <div className="col-start-2 row-start-1 col-span-2 row-span-3 md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-3 rounded-md p-5">

      </div>
    </div>

  )
}
