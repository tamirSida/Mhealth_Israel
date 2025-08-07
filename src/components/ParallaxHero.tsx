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
      id="home"
      ref={heroRef}
      className="parallax-hero"
    >
      {/* Community Health Impact Hero */}
      <div className="hero-content" ref={elementRef}>
        <h1 className={`hero-title ${isIntersecting ? 'animate' : ''}`}>
          Building Israel's <span className="hero-highlight">HealthTech</span> Community
        </h1>
        
        <p className={`hero-description ${isIntersecting ? 'animate' : ''}`}>
          Connecting entrepreneurs, investors, and industry leaders to transform healthcare through innovation. 
          Together, we're improving patient outcomes and advancing global health.
        </p>
        
        <div className={`hero-actions ${isIntersecting ? 'animate' : ''}`}>
          <a 
            href="https://www.linkedin.com/groups/4703553/" 
            className="btn btn--primary btn--large"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Join Our Community
          </a>
          <a 
            href="#impact" 
            className="btn btn--secondary btn--large"
            onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#impact')
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }
            }}
          >
            View Impact
          </a>
        </div>
        
      </div>
    </section>
  )
}