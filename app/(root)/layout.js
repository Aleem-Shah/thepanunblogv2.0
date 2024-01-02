
"use client"

import '../globals.scss'
import { Inter } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
       
      <NextUIProvider>

        {children}
        
      </NextUIProvider>
        </body>
    </html>
  )
}
