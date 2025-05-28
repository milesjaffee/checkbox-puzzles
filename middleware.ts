import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_LOCALES = ['en', 'es']
const DEFAULT_LOCALE = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameParts = pathname.split('/')
  const potentialLocale = pathnameParts[1]

  const isLocale = PUBLIC_LOCALES.includes(potentialLocale)
  const locale = isLocale ? potentialLocale : DEFAULT_LOCALE

  const response = NextResponse.next()
  response.cookies.set('NEXT_LOCALE', locale)

  return response
}