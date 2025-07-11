"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from '@/app/components/nav'
import Footer from '@/app/components/footer'
import React from 'react';
import { I18nProviderClient } from "@/locales/client";
import { SessionProvider } from 'next-auth/react';
import { Analytics } from "@vercel/analytics/next";
import LoginLogoutButton from "@/app/components/loginlogout";
import { supabase} from "@/lib/supabaseClient";

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
        <meta name="google-site-verification" content="Q2NCVJZOLlgJxzeMxTKh5gA3Y7ENcS73NqM-haQTFBc" />
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
        <main className="relative flex flex-col items-center justify-items-center h-screen px-16 pb-20 mb-20 pt-6 gap-10 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
        <I18nProviderClient locale={locale}>
          
            <div className="fixed top-4 sm:right-4 bg-[rgba(255,255,255,0.8)] backdrop-blur-lg rounded-lg shadow-xl p-2">
            <LoginLogoutButton />
            </div>



          <div className="bg-[rgba(255,255,255,0.6)] backdrop-blur-lg rounded-2xl shadow-xl sm:px-10 mb-20 p-4 w-full max-w-2xl ">
              
                
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

          </div>
          </I18nProviderClient>
          
          <Analytics />
        </main>


       
      </body>

      
    </html>
   
      
  );
}
