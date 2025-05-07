import { useState, useEffect } from 'react'

const themes = [
  { key: 'light', label: 'Light Mode' },
  { key: 'dark', label: 'Dark Mode' },
]

export function ThemeSelector() {
  const [selected, setSelected] = useState('system')

  useEffect(() => {
    const root = window.document.documentElement
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (theme: string) => {
      if (theme === 'dark' || (theme === 'system' && darkQuery.matches)) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    applyTheme(selected)

    if (selected === 'system') {
      const handler = () => applyTheme('system')
      darkQuery.addEventListener('change', handler)
      return () => darkQuery.removeEventListener('change', handler)
    }
  }, [selected])

  return (
    <div className='flex gap-5 h-40'>
      {themes.map((theme) => (
        <button
          key={theme.key}
          onClick={() => setSelected(theme.key)}
          className={`w-6/12 h-5/6 border rounded-lg p-2 mt-4 flex flex-col items-center transition ${selected === theme.key
              ? 'ring-2 ring-Primary bg-blue-50'
              : 'hover:border-Secondary'
            }`}
        >
          <div className='w-full h-24 bg-Primary dark:bg-Secondary rounded mb-2'></div>
          <div className='flex items-center gap-2'>
            <div
              className={`w-4 h-4 rounded-full border ${selected === theme.key ? 'bg-Primary' : ''
                }`}
            ></div>
            <span className='text-sm'>{theme.label}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
