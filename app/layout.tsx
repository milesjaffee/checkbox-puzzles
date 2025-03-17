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
        'text-black',
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body 
        className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            #FFF7E4, /* Light Yellow */
            #f0e053 15px
        )`,
      backgroundSize: "100% 200px",
      animation: "scrollBackground 20s linear infinite",
      }}
      >
        <style>
        {`
          @keyframes scrollBackground {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 0 200px;
            }
          }
        `}
      </style>
        <main className="relative flex flex-col items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="bg-[rgba(255,255,255,0.6)] backdrop-blur-lg rounded-2xl shadow-xl p-4 w-full max-w-2xl ">
          <Navbar />
          {children}
          <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
