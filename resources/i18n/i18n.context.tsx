'use client'

import { ReactNode, createContext, useContext, useMemo } from 'react'

import { enUS } from '../translations'

import { Resources } from './i18n.types'

type I18nContextProps = {
  data: Resources
}

type I18nProviderProps = I18nContextProps & {
  children: ReactNode
}

export const I18nContext = createContext<I18nContextProps>({
  data: enUS,
})

export const useI18nContext = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within a I18nProvider')
  }

  return context
}

export function I18nProvider({ children, data }: I18nProviderProps) {
  const value = useMemo(
    () => ({
      data,
    }),
    [data],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
