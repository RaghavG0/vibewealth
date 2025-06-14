// src/components/DarkModeToggle.tsx
'use client'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function DarkModeToggle() {
  const [theme, setTheme] = useState('light')
  // On load, check system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])
  // Toggle handler
  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }
  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      )}
    </button>
  )
}
