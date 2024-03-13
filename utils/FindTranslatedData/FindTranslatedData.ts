import { StrapiResponse, TCommonStrapiData } from '@/domain/types/common.types'

export const findTranslatedData = (
  lang: string,
  data?: StrapiResponse<TCommonStrapiData>,
) => {
  const result = []
  if (data && data.data) {
    for (let i = 0; i < data.data.length; i++) {
      const singleData = data.data[i]

      const localizedData = singleData.attributes.localizations.data.find(
        (value) => {
          return value.attributes.locale === lang
        },
      )

      if (localizedData) {
        result.push({
          id: singleData.id,
          localeId: localizedData.id,
          attributes: {
            ...singleData.attributes,
            ...localizedData.attributes,
          },
        })
      }
    }
  }
  return { data: result, meta: { ...data?.meta } }
}
