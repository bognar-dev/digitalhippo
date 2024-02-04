import type { Metadata } from 'next'
import { Teko } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/header/index'
import { getPayloadClient } from '@/get-payload'

const mulish = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
      <body className={mulish.className}>
        <Navbar shoots={shoots} />
        {children}
        </body>
    </html>
  )
}
