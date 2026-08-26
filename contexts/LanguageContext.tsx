'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'EN' | 'PT'
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'PT', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('PT')

  // Read saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('ct-lang')
    if (saved === 'EN' || saved === 'PT') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('ct-lang', l)
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
