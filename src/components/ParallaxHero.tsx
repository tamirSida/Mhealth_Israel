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
      {/* Floating particles */}
      <div className="particles-container">
        {particleData.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>


      {/* Morphing text effect */}
      <div className="hero-content-wrapper" ref={elementRef}>
        <div className={`morphing-text ${isIntersecting ? 'animate' : ''}`}>
          <h1 className="hero-title-morph">
            <span className="word-morph" data-text="Improving">Improving</span>
            <span className="word-morph" data-text="the">the</span>
            <span className="word-morph" data-text="Human">Human</span>
            <span className="word-morph" data-text="Condition">Condition</span>
          </h1>
        </div>
        
      </div>
    </section>
  )
}