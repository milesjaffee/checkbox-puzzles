import { NextRequest, NextResponse } from 'next/server'
import { localeKeys, defaultLocale } from '@/locales';

export function middleware(request: NextRequest) {
  
  const { pathname } = request.nextUrl;

  const isLocalePrefixed = Array.isArray(localeKeys) && localeKeys.some((locale: string) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!isLocalePrefixed && !pathname.startsWith('/_next')) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|webp|svg|css|js)).*)'],
};