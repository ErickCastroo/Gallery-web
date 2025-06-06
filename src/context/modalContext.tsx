import React, { createContext, useContext, useState } from 'react'
import Modal from 'react-modal'

import { IoCloseSharp } from 'react-icons/io5'

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
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-Third w-11/12 md:w-8/12  rounded-xl shadow-2xl h-auto max-h-[80vh] overflow-y-auto md:min-w-[60%] md:p-10'
        contentLabel='Global Modal'
        overlayClassName='fixed inset-0 bg-black/50 backdrop-blur-sm'
      >
        <button
          onClick={closeModal}
          className='hidden absolute top-4 right-4 w-8 h-8 rounded-full cursor-pointer md:flex items-center justify-center text-gray-300 hover:bg-white/80 transition-all duration-200 ease-in-out'
        >
          <IoCloseSharp className='w-8 h-8 text-gray-600 dark:hover:text-gray-900 dark:text-gray-400 hover:text-gray-600' />
        </button>
        {content}
      </Modal>

    </ModalContext.Provider>
  )
}

