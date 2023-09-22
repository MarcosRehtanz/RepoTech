import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gina de Mansilla</title>
      </head>
      <body className={inter.className}>
        <ul>
          <li><Link href='/' >Home</Link></li>
          <li><Link href='/about' >About</Link></li>
          <li><Link href={{
            pathname: '/blog/slug',
            query: {
              name: 'Juan',
              wife: 'Gina'
            }
          }} >Blog</Link></li>
        </ul>
        {children}
      </body>
    </html>
  )
}
