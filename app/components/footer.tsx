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
      
    </footer>
  )
}
