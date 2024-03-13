import { NextRequest, NextResponse } from 'next/server'

import {
  LOCALES,
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
  // Check if there is any supported locale in the pathname
  const { pathname, search } = request.nextUrl
  const redirectPathname = `${pathname}${search}`
  const localeFromPathname = pathname.split('/')[1]

  const pathnameIsMissingLocale = LOCALES.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}${redirectPathname}`, request.url),
    )
  }

  const redirectPathnameIncludesLocale = LOCALES.some((locale) =>
    redirectPathname.startsWith(`/${locale}`),
  )

  const pathnameToRedirect = redirectPathnameIncludesLocale
    ? redirectPathname
    : `/${localeFromPathname}${redirectPathname}`

  if (pathnameToRedirect === `${pathname}${search}`) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(pathnameToRedirect, request.url))
}

export const config = {
  matcher: [
    '/((?!_next|.*\\.(?:png|PNG|jpeg|JPEG|webp|WEBP|mp4|MP4|svg|SVG|jpg|JPG)|favicon|api/|analytics/|next/api/|robots.txt|sitemap.xml|manifest.json|sw.js|workbox-|worker-|sw-env|firebase-messaging-sw.js).*)',
  ],
}
