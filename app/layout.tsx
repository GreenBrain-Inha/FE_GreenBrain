import type { Metadata } from 'next'
import { Geist, Outfit, Inter } from 'next/font/google'
import './globals.css'
import 'katex/dist/katex.min.css'
import { Toaster } from 'sonner'
import { AppProvider } from '@/contexts/AppContext'
import RouteGuard from '@/components/RouteGuard'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Anoixi',
  description: 'AI 탄소 인식 챌린지 플랫폼',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geist.variable} ${outfit.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <RouteGuard>
            {children}
          </RouteGuard>
          <Toaster position="top-center" richColors />
        </AppProvider>
      </body>
    </html>
  )
}
