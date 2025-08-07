'use client'

import { useState } from 'react'
import CMSControl from './CMS/CMSControl'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface MarqueeStatData {
  number: string
  label: string
}

export default function StatsSection() {
  const [title, setTitle] = useState("Our Impact in Numbers")
  const [stats] = useState<MarqueeStatData[]>([
    { number: "$1.16B", label: "Funding Raised" },
    { number: "22,500+", label: "Active Members" },
    { number: "200+", label: "Events Hosted" },
    { number: "50+", label: "Global Partners" },
    { number: "70+", label: "Countries" },
    { number: "70%", label: "Director Level+" }
  ])

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  })

  // Duplicate stats for seamless marquee effect
  const duplicatedStats = [...stats, ...stats]

  return (
    <section className="section stats-marquee-section" id="impact" ref={elementRef}>
      <div className="container">
        <div className={`text-center mb-5 fade-in-up ${isIntersecting ? 'animate' : ''}`}>
          <CMSControl
            elementId="impactTitle"
            content={title}
            onUpdate={setTitle}
          >
            <h2 className="heading heading--2">{title}</h2>
          </CMSControl>
        </div>

        <div className="stats-marquee-wrapper">
          <div className="stats-marquee">
            {duplicatedStats.map((stat, index) => (
              <>
                <div key={`stat-${index}`} className="stat-item">
                  <div className="stat-icon">
                    <div className="logo-accent"></div>
                  </div>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                {index < duplicatedStats.length - 1 && (
                  <span key={`sep-${index}`} className="separator"></span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}