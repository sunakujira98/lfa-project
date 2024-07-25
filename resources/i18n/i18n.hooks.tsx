import { useMemo } from 'react'

import { useLanguage } from '@/components/Provider'

import { translate } from './i18n'
import { useI18nContext } from './i18n.context'

export function useTranslation() {
  const { lang } = useLanguage()
  const { data } = useI18nContext()

  return useMemo(
    () => ({
      t: translate(data),
      lang: lang as string,
    }),
    [lang, data],
  )
}
