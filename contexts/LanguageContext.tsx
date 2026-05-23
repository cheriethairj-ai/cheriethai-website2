'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'EN' | 'PT'
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'PT', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('PT')
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
