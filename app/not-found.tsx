//import Image from 'next/image';
'use client';
import { useEffect, useState } from 'react';
import { Navbar } from './components/nav'
import Footer from './components/footer'
import "@/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function NotFound() {
  const [catUrl, setCatUrl] = useState<string | null>(null);

  const fetchCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCatUrl(data[0].url);
    } catch (error) {
      console.error('Failed to fetch cat image:', error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <html
      lang={"en"}
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
                  <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist. Have a kitty... (Sourced from <a href="https://thecatapi.com/">thecatapi.com</a>)</p>
      {catUrl ? (
        <img
          src={catUrl}
          alt="Random cat"
          style={{
            maxWidth: '100%',
            height: '400px',
            borderRadius: '12px',
            border: '2px solid #ccc'
          }}
        />
      ) : (
        <p>Loading cat...</p>
      )}
                  <Footer />
                
              </div>
    
            </main>
            </body>
          </html>
      

  );
}