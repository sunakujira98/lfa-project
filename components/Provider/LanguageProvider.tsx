'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createContext, ReactNode, useContext } from 'react'

type LanguageContextType = {
  changeLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  changeLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

type LanguageProviderProps = {
  children: ReactNode
  lang: string
}

export const LanguageProvider = ({ children, lang }: LanguageProviderProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = () => {
    const isChinese = lang.includes('zh')
    const redirect = isChinese ? '/en-US' : '/zh-CN'

    const currentPath = pathname.replace(/^\/[a-z]{2}-[A-Z]{2}/, '')

    router.replace(`${redirect}${currentPath}`)
  }

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
