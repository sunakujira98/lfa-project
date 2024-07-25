import { NextRequest, NextResponse } from 'next/server'

import {
  LOCALES_MAP,
  LOCALE_COOKIE_KEY,
  SUPPORTED_LOCALES_ARRAY,
} from '@/constants/i18n.constants'

function getLocale(request: NextRequest) {
  const cookieLang = request.cookies.get(LOCALE_COOKIE_KEY)?.value
  if (cookieLang) {
    return LOCALES_MAP[cookieLang]
  }

  const acceptLanguage = request.headers.get('accept-language')
  const acceptLanguageArray = acceptLanguage?.split(',') || []

  const preferredLanguage = acceptLanguageArray.find((lang) => {
    const langWithoutQuality = lang.split(';')[0]
    return SUPPORTED_LOCALES_ARRAY.includes(langWithoutQuality)
  })

  if (!preferredLanguage) {
    return LOCALES_MAP.en
  }

  const preferredLanguageWithoutQuality = preferredLanguage.split(';')[0]
  const preferredLocale = LOCALES_MAP[preferredLanguageWithoutQuality]

  return preferredLocale ?? LOCALES_MAP.en
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request)

  if (!request.cookies.get(LOCALE_COOKIE_KEY)?.value) {
    const response = NextResponse.next()
    response.cookies.set(LOCALE_COOKIE_KEY, locale, { path: '/' })
    return response
  }

  const response = NextResponse.next()
  response.headers.set('x-locale', locale)
  return response
}

export const config = {
  matcher: [
    '/((?!_next|.*\\.(?:png|PNG|jpeg|JPEG|webp|WEBP|mp4|MP4|svg|SVG|jpg|JPG)|favicon|api/|analytics/|next/api/|robots.txt|sitemap.xml|manifest.json|sw.js|workbox-|worker-|sw-env|firebase-messaging-sw.js).*)',
  ],
}
