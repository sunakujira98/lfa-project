'use client'

import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'
import { useParams } from 'next/navigation'
import { ReactNode, memo } from 'react'

import { LOCALES } from '@/constants/i18n.constants'

type LinkProps = NextLinkProps & {
  children: ReactNode
  className?: string
  target?: string
  disabled?: boolean
}

function BaseLink({ children, href, disabled, ...props }: LinkProps) {
  const { lang } = useParams()

  if (disabled) {
    return children
  }

  const path = href as string
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`,
  )

  let pathname = path
  if (pathnameIsMissingLocale) {
    pathname = `/${lang}${path}`
  }

  return (
    <NextLink href={pathname} {...props}>
      {children}
    </NextLink>
  )
}

export const Link = memo(BaseLink)
