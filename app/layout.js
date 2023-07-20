import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Experimental Components',
  description: 'Experimental Components',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
