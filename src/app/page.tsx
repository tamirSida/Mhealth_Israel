'use client'

import Navigation from '@/components/Navigation'
import ParallaxHero from '@/components/ParallaxHero'
import AboutSection from '@/components/AboutSection'
import UpcomingEvents from '@/components/UpcomingEvents'
import EcosystemSection from '@/components/EcosystemSection'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <ParallaxHero />
        <AboutSection />
        <UpcomingEvents />
        <EcosystemSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  )
}