import { NextRequest, NextResponse } from 'next/server'
import { localeKeys, defaultLocale } from '@/locales';

export function middleware(request: NextRequest) {
  
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api") || pathname.startsWith("/.well-known") || pathname.startsWith("/_next") || pathname.startsWith("/favicon.ico") || pathname.match(/\.(ico|png|jpg|jpeg|webp|svg|css|js)$/)) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const potentialLocale = segments[1];

  if (segments[2] === "api") return;

  if (!localeKeys.includes(potentialLocale as any)) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|webp|svg|css|js)).*)'],
};