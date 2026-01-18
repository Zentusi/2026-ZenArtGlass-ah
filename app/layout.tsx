import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Zentusi Art Glass | Custom Art Glass for Interior & Exterior Design',
  description: 'Zentusi Art Glass creates custom art glass pieces for interior design and exterior backyards in the Greater Toronto Area. Transform your space with unique handcrafted glass art.',
  keywords: ['art glass', 'custom glass', 'interior design', 'exterior design', 'Toronto', 'GTA', 'fused glass', 'glass art'],
  authors: [{ name: 'Zentusi Art Glass' }],
  openGraph: {
    title: 'Zentusi Art Glass | Custom Art Glass Design',
    description: 'Custom art glass pieces for interior and exterior spaces in the Greater Toronto Area.',
    url: 'https://zentusi.ca',
    siteName: 'Zentusi Art Glass',
    locale: 'en_CA',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#9a8c67',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
