import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './config/routes'
import '@/config/lang/i18n'
import { ModalProvider } from './context/modalContext'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <Router />
    </ModalProvider>
  </StrictMode>,
)
