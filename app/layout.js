import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fp Servicios',
  description: 'Representante de transportes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col items-center h-full">{children}
      
      </body>
    </html>
  )
}
