

import './globals.scss'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Panun Blog',
  description: 'The Panun Blog is a writing platform established to unite the literary community of Kashmir, providing a platform for free speech to flourish. We are an independent website dedicated to raising the voice of the voiceless.',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">

    
      <body className={inter.className}>
      <ClerkProvider>
        {children}
        </ClerkProvider>
        
        </body>
    </html>
   
  )
}
