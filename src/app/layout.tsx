import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    absolute: 'Dev Links',
    template: '%s | Dev Links',
    default: 'Dev Links',
  },
  description: 'Desafio Rocketseat NextJS- Módulo 01',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <div className="min-h-dvh flex flex-col bg-(image:--bg-mobile-url) md:bg-(image:--bg-desktop-url) bg-cover bg-center">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
