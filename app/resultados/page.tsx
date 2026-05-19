'use client'

import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import Resultados from '@/components/sections/Resultados'
import Footer from '@/components/sections/Footer'

export default function ResultadosPage() {
  return (
    <>
      <CustomCursor />
      <main>
        <Navigation />
        <Resultados />
        <Footer />
      </main>
    </>
  )
}
