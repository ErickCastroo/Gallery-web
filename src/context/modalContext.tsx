import React, { createContext, useContext, useState } from 'react'
import Modal from 'react-modal'

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
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-2xl w-11/12 h-auto max-h-[80vh] overflow-y-auto'
        contentLabel='Global Modal'
        overlayClassName='fixed inset-0 bg-black/50 backdrop-blur-sm'
      >
        <button
          onClick={closeModal}
          className='absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          X
        </button>
        {content}

      </Modal>
    </ModalContext.Provider>
  )
}

