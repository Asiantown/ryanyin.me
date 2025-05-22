import './globals.css'
import '../styles/fonts.css'  // Add this line
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',  // Add this
})

export const metadata = {
  title: 'Ryan Yin',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white dark:bg-midnight`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}