import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🎉 Sorteo con Propósito - APOFI | Gana un Bono de S/ 3,500',
  description: 'Participa en nuestro sorteo y gana uno de los 3 bonos de S/ 3,500 para tu tratamiento dental. Transforma tu sonrisa con APOFI.',
  keywords: 'sorteo dental, bono dental, tratamiento dental, apofi, odontología, sonrisa',
  authors: [{ name: 'APOFI' }],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://maxillaris.com/sorteo',
    title: '🎉 Sorteo con Propósito - Maxillaris',
    description: 'Gana un bono de S/ 3,500 para tu tratamiento dental. ¡Participa ahora!',
    siteName: 'APOFI',
    images: [
      {
        url: 'https://maxillaris.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sorteo con Propósito - Maxillaris',
      },
    ],
  },
      twitter: {
      card: 'summary_large_image',
      site: '@apofi',
      creator: '@apofi',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
