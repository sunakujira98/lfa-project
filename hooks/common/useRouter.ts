import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter as useBaseRouter } from 'next/navigation'
import * as Nprogress from 'nprogress'

import { LOCALES } from '@/constants/i18n.constants'
import { useLanguage } from '@/components/Provider'

export const useRouter = () => {
  const router = useBaseRouter()
  const { lang } = useLanguage()

  const push = (path: string, options?: NavigateOptions) => {
    const pathnameIsMissingLocale = LOCALES.every(
      (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`,
    )

    let pathname = path
    if (pathnameIsMissingLocale) {
      pathname = `/${lang}${path}`
    }

    Nprogress.start()
    router.push(pathname, options)
  }

  return {
    ...router,
    push,
  }
}
