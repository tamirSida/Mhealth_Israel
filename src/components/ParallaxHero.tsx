'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface MarqueeStatData {
  number: string
  label: string
}

export default function ParallaxHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // On mobile, always show animations. On desktop, use intersection observer
  const shouldAnimate = isMobile || isIntersecting

  // Stats data for marquee
  const [stats] = useState<MarqueeStatData[]>([
    { number: "$1.16B", label: "Funding Raised" },
    { number: "22,500+", label: "Active Members" },
    { number: "200+", label: "Events Hosted" },
    { number: "50+", label: "Global Partners" },
    { number: "70+", label: "Countries" },
    { number: "70%", label: "Director Level+" }
  ])

  // Duplicate stats for seamless marquee effect
  const duplicatedStats = [...stats, ...stats]

  // Generate consistent particle data that won't change between server/client
  const particleData = useMemo(() => {
    const particles = []
    // Use a seeded random function to ensure consistency
    let seed = 12345
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }

    for (let i = 0; i < 25; i++) {
      particles.push({
        left: seededRandom() * 100,
        top: seededRandom() * 100,
        delay: seededRandom() * 3,
        duration: 3 + seededRandom() * 4
      })
    }
    return particles
  }, [])

  return (
    <section 
      id="home"
      ref={heroRef}
      className="parallax-hero"
    >
      {/* Community Health Impact Hero */}
      <div className="hero-content" ref={elementRef}>
        <h1 className={`hero-title ${shouldAnimate ? 'animate' : ''}`}>
          Building Israel's <span className="hero-highlight">HealthTech</span> Community
        </h1>
        
        <p className={`hero-description ${shouldAnimate ? 'animate' : ''}`}>
          Connecting entrepreneurs, investors, and industry leaders to transform healthcare through innovation. 
          Together, we're improving patient outcomes and advancing global health.
        </p>
        
        <div className={`hero-actions ${shouldAnimate ? 'animate' : ''}`}>
          <a 
            href="https://www.linkedin.com/groups/4703553/" 
            className="btn btn--primary btn--large"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Join Our Community
          </a>
        </div>
        
      </div>

      {/* Marquee Stats Strip */}
      <div className="hero-marquee-wrapper">
        <div className="hero-marquee-title">
          <h3 className="marquee-title">Our Impact in Numbers</h3>
        </div>
        <div className="hero-marquee">
          {duplicatedStats.map((stat, index) => (
            <React.Fragment key={`fragment-${index}`}>
              <div className="hero-stat-item">
                <div className="stat-icon">
                  <div className="logo-accent"></div>
                </div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {index < duplicatedStats.length - 1 && (
                <span className="separator"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}