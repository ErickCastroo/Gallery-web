import React, { createContext, useContext, useState } from 'react'
import Modal from 'react-modal'

import { IoIosCloseCircleOutline } from "react-icons/io"

Modal.setAppElement('#root')

interface ModalContextType {
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal debe usarse dentro de un ModalProvider')
  }
  return context
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<React.ReactNode>(null)

  const openModal = (modalContent: React.ReactNode) => {
    setContent(modalContent)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setContent(null)
  }

  const value = { openModal, closeModal }

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white md:p-10 rounded-xl shadow-2xl w-11/12 h-auto max-h-[80vh] overflow-y-auto'
        contentLabel='Global Modal'
        overlayClassName='fixed inset-0 bg-black/50 backdrop-blur-sm'
      >
        <button
          onClick={closeModal}
          className='hidden absolute top-2 right-2 w-8 h-8 rounded-full cursor-pointer md:flex items-center justify-center bg-white/50 hover:bg-white/80 transition-all duration-200 ease-in-out'
        >
          <IoIosCloseCircleOutline className='w-8 h-8 text-gray-600 hover:text-gray-900' />
        </button>
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}

