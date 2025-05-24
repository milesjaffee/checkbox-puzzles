import Link from 'next/link'
import React from 'react'
import { useI18n, useScopedI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  const t = useI18n();

  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <footer className="mb-16 flex-col">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0">
        
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/milesjaffee/checkbox-puzzles"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{t('footer.github')}</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{t('footer.vercel')}</p>
          </a>
        </li>
        <li>
          <a className="flex items-center transition-all hover:text-neutral-800"
          rel="noopener noreferrer"
          target="_blank"
          href="https://opensource.org/license/mit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">
              © {new Date().getFullYear()} {t('footer.license')}
            </p>
          </a>
        </li>
        
      </ul>
      <div className="flex items-center">
          <button type="button" className="border-1" onClick={() => changeLocale("en")}>
          🇺🇸EN
        </button>
        <button type="button" className="border-1" onClick={() => changeLocale("es")}>
          🇲🇽ES
        </button>
      </div>
      
    </footer>
  )
}
