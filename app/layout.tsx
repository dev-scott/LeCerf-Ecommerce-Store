// import { Urbanist } from 'next/font/google'

// import { Raleway } from 'next/font/google'

import {Nunito} from "next/font/google"

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from '@/providers/theme-provider'

// const font = Urbanist({ subsets: ['latin'] });


const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          >
        <ToastProvider />
        <ModalProvider />
        {/* <Header/> */}
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
