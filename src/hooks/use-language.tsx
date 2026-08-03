import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Locale } from '@/i18n/translations'

interface LanguageContextType {
  locale: Locale
  setLocale: (loc: Locale) => void
  t: (key: keyof (typeof translations)['pt']) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('portfolio_locale') as Locale
    if (saved && ['pt', 'en', 'es'].includes(saved)) return saved
    return 'pt'
  })

  const setLocale = (loc: Locale) => {
    setLocaleState(loc)
    localStorage.setItem('portfolio_locale', loc)
  }

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale
    const titleMap = {
      pt: 'Nick (Nicole Maira) | Game Developer & Gameplay Programmer',
      en: 'Nick (Nicole Maira) | Game Developer & Gameplay Programmer',
      es: 'Nick (Nicole Maira) | Game Developer & Gameplay Programmer',
    }
    document.title = titleMap[locale]
  }, [locale])

  const t = (key: keyof (typeof translations)['pt']): string => {
    return translations[locale][key] || translations['pt'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
