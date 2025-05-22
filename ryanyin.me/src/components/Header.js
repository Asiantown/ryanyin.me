'use client'

import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <nav className="flex justify-center items-center h-16 relative">
          <div className="flex space-x-12">
            <a href="/about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              About
            </a>
            <a href="/publications" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Publications
            </a>
            <a href="/experience" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Experience
            </a>
            <a href="/contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Contact Me
            </a>
            <a href="/resume" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Resume
            </a>
          </div>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="absolute right-4 p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}