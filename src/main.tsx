import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


import { Router } from '@/config/routes'
import { ModalProvider } from '@/context/modalContext'

import '@/config/lang/i18n'
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(

  <StrictMode >
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ToastContainer />
      </QueryClientProvider>
    </ModalProvider>
  </StrictMode >,
)