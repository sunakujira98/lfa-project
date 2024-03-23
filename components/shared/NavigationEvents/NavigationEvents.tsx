'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import * as Nprogress from 'nprogress'
import { useEffect } from 'react'

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    Nprogress.done()
  }, [pathname, searchParams])

  return null
}
