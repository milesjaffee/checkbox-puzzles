import Link from 'next/link'
import React from 'react'
import LocalizedLink from '@/app/components/LocalizedLink'
import { useI18n, useScopedI18n } from "@/locales/client";

export function Navbar() {

  const t = useI18n();

  const navItems = {
    '/': {
      name: t('navbar.home'),
    },
    '/game': {
      name: t('navbar.game'),
    },
    'https://milesjaffee.substack.com': {
      name: t('navbar.blog'),
    },
  }
  
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-justify px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex-1 flex-row space-x-2 pr-10">
            <p className="transition-all hover:text-neutral-800 flex align-middle place-content-evenly relative py-1 px-2 m-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                
                <LocalizedLink
                  key={path}
                  href={path}
                  
                >
                  &lt;{name}/&gt; &nbsp;
                </LocalizedLink>
                 
              )
            })}
            </p>
          </div>
        </nav>
      </div>
    </aside>
  )
}
