'use client'

import { useEffect, useState } from 'react'
import CustomCursor from '@/components/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import HomepageGateway from '@/components/sections/HomepageGateway'
import CinematicSection from '@/components/sections/CinematicSection'
import Philosophy from '@/components/sections/Philosophy'
import Method from '@/components/sections/Method'
import ArchitectureSection from '@/components/sections/ArchitectureSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

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
        <HomepageGateway />
        <CinematicSection />
        <Philosophy />
        <Method />
        <ArchitectureSection />
        <Footer />
      </main>
    </>
  )
}
