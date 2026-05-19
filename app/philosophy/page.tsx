'use client'

import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import PhilosophyHero from '@/components/philosophy/PhilosophyHero'
import PhilosophyManifesto from '@/components/philosophy/PhilosophyManifesto'
import PhilosophyPrinciples from '@/components/philosophy/PhilosophyPrinciples'
import PhilosophyClose from '@/components/philosophy/PhilosophyClose'
import Footer from '@/components/sections/Footer'
import type { Metadata } from 'next'

export default function PhilosophyPage() {
  return (
    <>
      <CustomCursor />
      <main>
        <Navigation />
        <PhilosophyHero />
        <PhilosophyManifesto />
        <PhilosophyPrinciples />
        <PhilosophyClose />
        <Footer />
      </main>
    </>
  )
}
