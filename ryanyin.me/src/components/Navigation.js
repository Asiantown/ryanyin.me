'use client'
import Link from 'next/link'
import clsx from 'clsx'

export function Navigation({ navigation, pathname }) {
  return (
    <div className="hidden md:ml-10 md:block">
      <div className="flex space-x-8">
        {navigation.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'inline-flex items-center px-1 pt-1 text-sm font-medium',
              pathname === link.href
                ? 'text-gray-900 dark:text-gray-100'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}