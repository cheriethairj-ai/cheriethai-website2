'use client'

import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import LondonHero from '@/components/london/LondonHero'
import LondonStory from '@/components/london/LondonStory'
import LondonWaitlist from '@/components/london/LondonWaitlist'
import Footer from '@/components/sections/Footer'

export default function LondonPage() {
  return (
    <>
      <CustomCursor />
      <main>
        <Navigation />
        <LondonHero />
        <LondonStory />
        <LondonWaitlist />
        <Footer />
      </main>
    </>
  )
}
