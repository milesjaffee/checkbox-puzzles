import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];

export function middleware(request: NextRequest) {
  /*const pathname = request.nextUrl.pathname;

  // Redirect / to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Ensure /game is not misinterpreted as a locale
  const pathParts = pathname.split('/').filter(Boolean);
  const maybeLocale = pathParts[0];

  if (!locales.includes(maybeLocale)) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();*/
}