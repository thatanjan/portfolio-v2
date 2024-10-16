import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ReactNode } from 'react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Anjan Shomodder',
  description: 'A Full Stack developer, Youtuber & Blogger',
}

interface Props {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
