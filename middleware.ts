import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_LOCALES = ['en', 'es', 'tp']
const DEFAULT_LOCALE = 'en'
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLocalePrefixed = PUBLIC_LOCALES.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!isLocalePrefixed && !pathname.startsWith('/_next')) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }

  if (pathname === '/404') {
    const locale = PUBLIC_LOCALES.find((locale) =>
      pathname.startsWith(`/${locale}`)
    ) || DEFAULT_LOCALE;

    return NextResponse.redirect(new URL(`/${locale}/404`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|webp|svg|css|js)).*)'],
};