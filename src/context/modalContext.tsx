// ModalContext.tsx
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
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        contentLabel='Global Modal'
      >
        {content}
        <button
          onClick={closeModal}
          className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
        >
          Cerrar
        </button>
      </Modal>
    </ModalContext.Provider>
  )
}
