/* eslint-disable @typescript-eslint/no-explicit-any */

import lodashGet from 'lodash/get'

import { SUPPORTED_LOCALES } from '@/constants/i18n.constants'
import {
  Resources,
  TranslateConfig,
  TranslationKeys,
  TranslationValue,
} from './i18n.types'

const translations = {
  [SUPPORTED_LOCALES['en-US']]: () =>
    import('./i18n.resources').then((module) => module.resources['en-US']),
  [SUPPORTED_LOCALES['zh-CN']]: () =>
    import('./i18n.resources').then((module) => module.resources['zh-CN']),
}

export const getTranslationData = (locale: string) => {
  if (translations[locale]) {
    return translations[locale]()
  }

  return translations[SUPPORTED_LOCALES['en-US']]()
}

export const translate =
  (translationData: Resources) =>
  <Key extends TranslationKeys>(
    path: Key,
    config?: TranslateConfig,
  ): TranslationValue<Key> => {
    const translationValue = lodashGet(translationData, path)
    let castedTranslationValue =
      translationValue as unknown as TranslationValue<Key>

    if (!config) {
      if (!translationValue) {
        return path as TranslationValue<Key>
      }

      return castedTranslationValue
    }

    const { defaultValue, ...otherConfig } = config
    if (!translationValue && defaultValue) {
      return defaultValue as TranslationValue<Key>
    }

    const configValues = Object.entries(otherConfig)
    configValues.forEach(([key, value]) => {
      const valueString = typeof value !== 'string' ? value?.toString() : value
      const valueToReplace = valueString ?? ''
      if (typeof castedTranslationValue === 'string') {
        castedTranslationValue = castedTranslationValue.replace(
          new RegExp(`{{${key}}}`, 'gi'),
          valueToReplace,
        ) as any
      }
    })

    return castedTranslationValue
  }

export const getServerTranslations = async (locale: string) => {
  const translationData = await getTranslationData(locale)

  return {
    t: translate(translationData),
  }
}
