import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from './components/nav'
import Footer from './components/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Checkbox Nightmare",
  description: "Checkbox Nightmare, Created by Miles Jaffee",

  openGraph: {
    title: "Checkbox Nightmare",
    description: "Checkbox Nightmare, Created by Miles Jaffee",
    locale: 'en_US',
    type: 'website',
  }
  
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black dark:text-white',
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body 
        className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            #FFF7C4, /* Light Yellow */
            #FFF7C4 50px,
            #FFEE99 50px,
            #FFEE62 100px
        )`,}}
      >
        <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
