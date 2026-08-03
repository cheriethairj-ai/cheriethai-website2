'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1">
      {(['PT', 'EN'] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && (
            <span className="label-text text-sage/15" style={{ fontSize: '0.45rem' }}>|</span>
          )}
          <button
            onClick={() => setLang(l)}
            className="label-text transition-colors duration-300"
            style={{
              fontSize: '0.52rem',
              letterSpacing: '0.2em',
              color: lang === l ? 'rgba(220,201,160,0.75)' : 'rgba(170,182,162,0.3)',
              cursor: 'none',
            }}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}
