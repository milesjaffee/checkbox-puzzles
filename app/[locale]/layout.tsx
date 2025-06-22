"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from '../components/nav'
import Footer from '../components/footer'
import React from 'react';
import { I18nProviderClient } from "@/locales/client";
import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function SubLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const unwrappedParams = React.use(params);
  let locale: keyof typeof kofiText = (unwrappedParams.locale as keyof typeof kofiText) || 'en';

  const kofiText = {
    en: 'Support me',
    es: 'Apóyame',
    tp: 'o esun e mi',
    de: 'Unterstütze mich',
    // Add more translations as needed
  };

  return (
    <html
    lang={locale}
      className={cx(
        'text-black',
        geistSans.variable,
        geistMono.variable
      )}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f0e053" />
        <meta name="description" content="Checkbox Nightmare, Created by Miles Jaffee" />
        <meta name="keywords" content="checkbox, nightmare, puzzle, game, miles jaffee" />
        <meta name="author" content="Miles Jaffee" />
        <link rel="icon" href="/favicon.ico" />
        <title>Checkbox Nightmare</title>
      </head>
      <body 
        className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            #FFF7E4,
            #f0e053 12px
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
      <SessionProvider>
        <main className="relative flex flex-col items-center justify-items-center h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">

          <div className="bg-[rgba(255,255,255,0.6)] backdrop-blur-lg rounded-2xl shadow-xl sm:px-10 p-4 w-full max-w-2xl ">
              <I18nProviderClient locale={locale}>
                
            <Navbar />
            {children}
            <Footer />
            <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
            <script
              dangerouslySetInnerHTML={{
              __html: `
              const updateKofiWidget = (locale) => {
              kofiWidgetOverlay.draw('milesjaffee', {
                type: 'floating-chat',
                'floating-chat.donateButton.text': '${kofiText[locale] ?? kofiText.en}',
                'floating-chat.donateButton.background-color': '#fffc',
                'floating-chat.donateButton.text-color': '#000'
              });
              };

              // Initial setup
              updateKofiWidget('${locale}');
              `,
              }}
            ></script>

            
          </I18nProviderClient>
          </div>

        </main>
        </SessionProvider>

       
      </body>

      
    </html>
   
      
  );
}
