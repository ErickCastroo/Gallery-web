import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from '@/views/home'
import { Groups } from '@/views/Groups'
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
      </Routes>
    </BrowserRouter>
  )
}

export { Router }