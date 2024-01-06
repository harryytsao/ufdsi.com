import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UF DSI',
  description: 'Data Science and Informatics University of Florida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed h-screen w-full">
          <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
        </div>

      </body>
    </html>
  )
}
