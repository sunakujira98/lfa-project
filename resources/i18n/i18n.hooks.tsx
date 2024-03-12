import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { translate } from './i18n'
import { useI18nContext } from './i18n.context'

export function useTranslation() {
  const { lang } = useParams()
  const { data } = useI18nContext()

  return useMemo(
    () => ({
      t: translate(data),
      lang: lang as string,
    }),
    [lang, data],
  )
}
