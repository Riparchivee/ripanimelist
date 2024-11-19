import Navbar from '@/components/Navbar'
import NavbarBot from '@/components/Navbar/NavbarBot'
import '@/app/globals.css'
import FixNavbarBot from "@/components/Navbar/FixNavbarBot"
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'ARIPNime',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <NavbarBot />
        {children}
        <FixNavbarBot />
      </body>
    </html>
  )
}
