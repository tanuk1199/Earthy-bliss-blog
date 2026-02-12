import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"] });
const _sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Earthy Bliss Co. Blog | Recipes, Techniques & Baking Guides',
    template: '%s | Earthy Bliss Co. Blog',
  },
  description: 'Recipes, baking techniques, and kitchen guides from Earthy Bliss Co. Learn to bake bread, score dough, proof like a pro, and more.',
  metadataBase: new URL('https://blog.earthyblissco.com'),
  openGraph: {
    siteName: 'Earthy Bliss Co. Blog',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
