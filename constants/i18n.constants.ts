export const SUPPORTED_LOCALES = {
  en: 'en',
  'en-US': 'en-US',
  'zh-CN': 'zh-CN',
  zh: 'zh',
}
export const SUPPORTED_LOCALES_ARRAY = Object.values(SUPPORTED_LOCALES)
export const LOCALES = [SUPPORTED_LOCALES['en-US'], SUPPORTED_LOCALES['zh-CN']]

export const LOCALES_MAP = {
  [SUPPORTED_LOCALES.en]: 'en-US',
  [SUPPORTED_LOCALES['en-US']]: 'en-US',
  [SUPPORTED_LOCALES['zh-CN']]: 'zh-CN',
  [SUPPORTED_LOCALES.zh]: 'zh-CN',
}

export const LOCALE_COOKIE_KEY = 'preferredLang'
