'use client'

import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode, memo } from 'react'

type LinkProps = NextLinkProps & {
  children: ReactNode
  className?: string
  target?: string
  disabled?: boolean
}

function BaseLink({ children, href, disabled, ...props }: LinkProps) {
  if (disabled) {
    return children
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  )
}

export const Link = memo(BaseLink)
