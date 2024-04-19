import { Inter } from 'next/font/google'
import Head from 'next/head';

import './font.scss'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enata Careers Sample',
  description: 'Generated by create next app',
  verification: {
    google: 'jRpOmOLhzaWrust7ul5nfr4gF8-hRE32GQAYY25aGtg',   
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
