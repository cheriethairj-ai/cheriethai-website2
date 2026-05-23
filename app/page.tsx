'use client'

import { useEffect, useState } from 'react'
import CustomCursor from '@/components/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import Method from '@/components/sections/Method'
import ArchitectureSection from '@/components/sections/ArchitectureSection'
import Biography from '@/components/sections/Biography'
import FivePrinciples from '@/components/sections/FivePrinciples'
import ClinicalResults from '@/components/sections/ClinicalResults'
import Therapists from '@/components/sections/Therapists'
import Institute from '@/components/sections/Institute'
import CertifiedPractitioners from '@/components/sections/CertifiedPractitioners'
import Retreats from '@/components/sections/Retreats'
import Locations from '@/components/sections/Locations'
import CinematicSection from '@/components/sections/CinematicSection'
import VideoReel from '@/components/sections/VideoReel'
import ToEmbody from '@/components/sections/ToEmbody'
import Booking from '@/components/sections/Booking'
import Footer from '@/components/sections/Footer'
import SectionDivider from '@/components/SectionDivider'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <LoadingScreen isLoaded={isLoaded} />
      <main
        className="relative"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 800ms cubic-bezier(0.25, 0.1, 0.25, 1.0)' }}
      >
        <Navigation />
        <Hero />
        <CinematicSection />
        <Philosophy />
        <Method />
        <ArchitectureSection />
        <Biography />
        <VideoReel />
        <FivePrinciples />
        <ClinicalResults />
        <SectionDivider label={lang === 'EN' ? 'Therapists' : 'Terapeutas'} />
        <Therapists />
        <SectionDivider label={lang === 'EN' ? 'Institute' : 'Instituto'} />
        <Institute />
        <CertifiedPractitioners />
        <Retreats />
        <SectionDivider label="São Paulo. Rio de Janeiro. Phimai." />
        <Locations />
        <SectionDivider label={lang === 'EN' ? 'Shop' : 'Loja'} />
        <ToEmbody />
        <SectionDivider label={lang === 'EN' ? 'Contact' : 'Contacto'} />
        <Booking />
        <Footer />
      </main>
    </>
  )
}
