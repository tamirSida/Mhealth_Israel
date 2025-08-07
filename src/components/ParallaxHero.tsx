'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ParallaxHero() {
  const heroRef = useRef<HTMLElement>(null)
  const { elementRef, isIntersecting } = useIntersectionObserver()

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
      ref={heroRef}
      className="parallax-hero"
    >
      {/* Community Health Impact Hero */}
      <div className="hero-content" ref={elementRef}>
        <div className={`hero-badge ${isIntersecting ? 'animate' : ''}`}>
          <span className="hero-badge__text">22,500+ Healthcare Innovators</span>
        </div>
        
        <h1 className={`hero-title ${isIntersecting ? 'animate' : ''}`}>
          Building Israel's <span className="hero-highlight">HealthTech</span> Community
        </h1>
        
        <p className={`hero-description ${isIntersecting ? 'animate' : ''}`}>
          Connecting entrepreneurs, investors, and industry leaders to transform healthcare through innovation. 
          Together, we're improving patient outcomes and advancing global health.
        </p>
        
        <div className={`hero-actions ${isIntersecting ? 'animate' : ''}`}>
          <button className="btn btn--primary btn--large">Join Our Community</button>
          <button className="btn btn--secondary btn--large">View Impact</button>
        </div>
        
        <div className={`hero-impact-stats ${isIntersecting ? 'animate' : ''}`}>
          <div className="impact-stat">
            <span className="impact-number">$1.16B</span>
            <span className="impact-label">Funding Raised</span>
          </div>
          <div className="impact-stat">
            <span className="impact-number">200+</span>
            <span className="impact-label">Events Hosted</span>
          </div>
          <div className="impact-stat">
            <span className="impact-number">50+</span>
            <span className="impact-label">Global Partners</span>
          </div>
        </div>
      </div>
    </section>
  )
}