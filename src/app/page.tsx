'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import EcosystemSection from '@/components/EcosystemSection'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <EcosystemSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  )
}