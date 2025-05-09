import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from '@/views/home'
import { Login } from '@/views/Login'
import { Groups } from '@/views/Groups'
import { Register } from '@/views/Register'
import { Layout } from '@/components/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/grupos' element={<Groups />} />
          <Route path='/*' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }