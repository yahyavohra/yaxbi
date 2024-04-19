import { Inter } from 'next/font/google'
import Head from 'next/head';

import './font.scss'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yaxbi - Transforming Ideas into Innovative Tech Solutions',
  description: 'Yaxbi specializes in tech solutions for business growth, offering expertise in MVP development and digital transformation. Unlock your business potential with Yaxbi. Discover how Yaxbi can transform your business with our comprehensive tech solutions. From MVP development to enterprise digital transformation, we have you covered.',
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
