import { Bricolage_Grotesque, Fraunces } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${fraunces.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}