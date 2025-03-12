import Link from 'next/link'
import React from 'react'

const navItems = {
  '/': {
    name: 'home',
  },
  '/game': {
    name: 'play game',
  },
  'https://milesjaffee.substack.com': {
    name: 'jaffeelabs',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <>
                
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  &lt; {name} /&gt; &nbsp;
                </Link>
                 
                </>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
