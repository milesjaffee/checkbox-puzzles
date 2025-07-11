import { NextRequest, NextResponse } from 'next/server';
import { localeKeys } from '@/locales';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Safe exclusions for all API routes and known assets
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/.well-known") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/google") ||
    pathname.match(/\.(ico|png|jpg|jpeg|webp|svg|css|js)$/)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const potentialLocale = segments[1];

  // Redirect if no valid locale in the path
  if (!localeKeys.includes(potentialLocale as any)) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|webp|svg|css|js)).*)'],
};