import { Link, Outlet } from 'react-router-dom'

import { BsImages } from 'react-icons/bs'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { IoSettingsOutline } from 'react-icons/io5'



function Layout() {
  return (
    <>
      <div className='flex flex-col h-screen w-screen bg-gray-100 dark:bg-gray-900'>
        <main className='flex-grow p-4 bg-Background'>
          <Outlet />
        </main>
        <footer className='grid grid-cols-3 bg-Secondary h-20 items-center justify-items-center text-center text-white dark:bg-SecondaryDark'>
          <Link to='/' className='text-Background'><BsImages className='text-3xl hover:scale-110 transition-transform duration-150' /></Link>
          <Link to='/' className='text-Background'><LiaUserFriendsSolid className='text-3xl hover:scale-110 transition-transform duration-150' /></Link>
          <Link to='/' className='text-Background'><IoSettingsOutline className='text-3xl hover:scale-110 transition-transform duration-150' /></Link>
        </footer>
      </div>
    </>
  )
}

export { Layout }