import Link from 'next/link'
import React from 'react'
import { useI18n, useScopedI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";
import LocalizedLink from "@/app/components/LocalizedLink";

export default function Footer() {
  const t = useI18n();

  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <footer className="mb-4 flex flex-col items-center justify-center">
      <div className="font-sm mt-8 flex space-y-2 text-neutral-600">
        
        <p className="flex flex-row items-center content-evenly">
          <a
            className="flex items-center transition-all hover:text-neutral-800 mx-2 h-7"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/milesjaffee/checkbox-puzzles"
          >
            {t('footer.github')}{" "}
          </a>
          {" "}|{" "}
          <a
            className="flex items-center transition-all hover:text-neutral-800 mx-2 h-7"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/home"
          >
            {t('footer.vercel')}{" "}
          </a>
          {" "}|{" "}
          <a className="flex items-center transition-all hover:text-neutral-800 mx-2 h-7"
          rel="noopener noreferrer"
          target="_blank"
          href="https://opensource.org/license/mit"
          >
              © {new Date().getFullYear()} {t('footer.license')}
          </a>

        </p>
        
      </div>
      <div className="flex items-center justify-center mt-2 content-evenly space-x-4">
          <button type="button" className="mx-2" onClick={() => changeLocale("en")}>
          🇺🇸EN
        </button>
        |
        <button type="button" className="mx-2" onClick={() => changeLocale("es")}>
          🇲🇽ES
        </button>
        |
        <button type="button" className="mx-2" onClick={() => changeLocale("de")}>
          🇩🇪DE
        </button>
        |
        <button type="button" className="mx-2" onClick={() => changeLocale("tp")}>
          🇦🇶TP
        </button>
      </div>

      <div className="text-sm text-neutral-500 mt-2">
        <p><LocalizedLink href="/privacypolicy">
          {t('privacypolicy.title')}
        </LocalizedLink></p>
      </div>
      
    </footer>
  )
}
