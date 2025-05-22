'use client'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type="button"
      className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon className="h-5 w-5 text-gray-900 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 text-gray-100 dark:block" />
    </button>
  )
}