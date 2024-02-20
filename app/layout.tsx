import ReactQueryProvider from '@/components/Provider/ReactQuery'
import { keppler, neue } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LFA - Interior Design',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactQueryProvider>
      <html lang='en'>
        <body className={`${neue.variable} ${keppler.variable}`}>
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  )
}
