import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat'
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Missing Calls? We Fix It FREE - Only 2 Spots Left | Bizz Boost',
  description: 'Stop losing patients to competitors. We build you a FREE online booking system. Only 2 spots left this month.',
  keywords: 'missing calls, free online booking system, bizz boost, book appointment, chiropractic',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
