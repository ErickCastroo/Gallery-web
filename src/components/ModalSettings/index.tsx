interface ModalSettingsProps {
  closeModal: () => void
}

export function ModalSettings({ closeModal }: ModalSettingsProps) {
  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Configuración</h2>
      <p>Aquí puedes configurar las opciones de la aplicación.</p>
      <button
        onClick={closeModal}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Cerrar
      </button>
    </div>
  )
}
