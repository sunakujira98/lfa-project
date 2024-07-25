'use client'

import { useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type LanguageContextType = {
  lang: string
  changeLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en-US',
  changeLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

type LanguageProviderProps = {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const router = useRouter()

  const [lang, setLang] = useState('en-US')

  useEffect(() => {
    const cookieLang = document.cookie
      .split('; ')
      .find((row) => row.startsWith('LOCALE_COOKIE_KEY='))
      ?.split('=')[1]

    if (cookieLang) {
      setLang(cookieLang)
    }
  }, [])

  const changeLanguage = () => {
    const isChinese = lang.includes('zh')
    const newLang = isChinese ? 'en-US' : 'zh-CN'

    document.cookie = `LOCALE_COOKIE_KEY=${newLang}; path=/`

    setLang(newLang)

    router.refresh()
  }

  return (
    <LanguageContext.Provider value={{ changeLanguage, lang }}>
      {children}
    </LanguageContext.Provider>
  )
}
