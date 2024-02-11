import type { Metadata } from 'next'
import { Libre_Caslon_Text, Teko } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/header/index'
import { getPayloadClient } from '@/get-payload'
import localFont from 'next/font/local'
import React from 'react'
const mulish = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Niklas Bognar',
  description: 'A Model Portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const payload = await getPayloadClient()
  
  const { docs: shoots } = await payload.find({
    collection: 'shoots',
  })
  return (
    <html lang="en">
      <body className={libreCaslon.className}>
        <Navbar shoots={shoots} />
        {children}
      </body>
    </html>
  )
}
