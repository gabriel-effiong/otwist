import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Ostwise Event | Premium Catering & Food Delivery',
  description: 'Experience exceptional catering services and food delivery for your events. From intimate gatherings to grand celebrations, Ostwise Event delivers culinary excellence.',
  keywords: ['catering', 'food delivery', 'event catering', 'corporate catering', 'party food', 'meal delivery'],
  authors: [{ name: 'Ostwise Event' }],
  openGraph: {
    title: 'Ostwise Event | Premium Catering & Food Delivery',
    description: 'Experience exceptional catering services and food delivery for your events.',
    type: 'website',
    siteName: 'Ostwise Event',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ostwise Event | Premium Catering & Food Delivery',
    description: 'Experience exceptional catering services and food delivery for your events.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
