import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from '@/views/home'
import { Layout } from '@/components/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router }