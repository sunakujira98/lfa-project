export const SUPPORTED_LOCALES = {
  en: 'en',
  'en-US': 'en-US',
  'en-GB': 'en-GB',
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-TW',
  'zh-HK': 'zh-HK',
  'zh-SG': 'zh-SG',
  zh: 'zh',
}
export const SUPPORTED_LOCALES_ARRAY = Object.values(SUPPORTED_LOCALES)
export const LOCALES = [SUPPORTED_LOCALES['en-US'], SUPPORTED_LOCALES['zh-CN']]

export const LOCALES_MAP = {
  [SUPPORTED_LOCALES.en]: 'en-US',
  [SUPPORTED_LOCALES['en-US']]: 'en-US',
  [SUPPORTED_LOCALES['en-GB']]: 'en-US',
  [SUPPORTED_LOCALES['zh-CN']]: 'zh-CN',
  [SUPPORTED_LOCALES['zh-TW']]: 'zh-CN',
  [SUPPORTED_LOCALES['zh-HK']]: 'zh-HK',
  [SUPPORTED_LOCALES['zh-SG']]: 'zh-CN',
  [SUPPORTED_LOCALES.zh]: 'zh-CN',
}

export const LOCALE_COOKIE_KEY = 'preferredLang'
