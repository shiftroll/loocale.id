import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
})

export const metadata: Metadata = {
  title: 'Loocale',
  description: 'Your local guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/normalize.css" />
        <link rel="stylesheet" href="/assets/css/webflow.css" />
        <link rel="stylesheet" href="/assets/css/loocale.webflow.css" />
      </head>
      <body className={`${inter.className} ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  )
} 