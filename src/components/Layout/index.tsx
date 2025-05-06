import { Link, Outlet } from 'react-router-dom'

import { BsImages } from 'react-icons/bs'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { IoSettingsOutline } from 'react-icons/io5'


function Layout() {
  return (
    <>
      <div className='flex flex-col h-screen w-full bg-gray-100 dark:bg-gray-900'>
        <header className='shrink-0 flex items-center justify-between p-5  bg-Secondary text-white'>
          <h1 className='text-2xl md:ml-16'>
            <Link to='/'>
              Goodllery
            </Link>
          </h1>

          <nav className='hidden md:flex space-x-10 mr-16'>
            <Link to='/' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
              <BsImages />
              <span className='text-xs'>Gallery</span>
            </Link>
            <Link to='/about' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
              <LiaUserFriendsSolid />
              <span className='text-xs'>About</span>
            </Link>
            <Link to='/contact' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
              <IoSettingsOutline />
              <span className='text-xs'>Settings</span>
            </Link>
          </nav>
        </header>
        <main className='flex-grow overflow-y-auto p-4 bg-Background'>
          <Outlet />
        </main>

        <footer className='shrink-0 grid grid-cols-3 bg-Secondary h-20 items-center justify-items-center text-center text-white md:hidden'>
          <Link to='/' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
            <BsImages />
            <span className='text-xs'>Gallery</span>
          </Link>
          <Link to='/about' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
            <LiaUserFriendsSolid />
            <span className='text-xs'>About</span>
          </Link>
          <Link to='/contact' className='flex flex-col items-center justify-center text-2xl hover:text-Primary'>
            <IoSettingsOutline />
            <span className='text-xs'>Settings</span>
          </Link>
        </footer>
      </div>
    </>
  )
}

export { Layout }