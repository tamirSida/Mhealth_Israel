'use client'

import { useState, useEffect } from 'react'
import CMSControl from './CMS/CMSControl'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useCountUp } from '@/hooks/useCountUp'

interface StatData {
  number: string
  label: string
  numericValue: number
  suffix: string
}

function AnimatedStat({ stat, index, onUpdate, isVisible }: {
  stat: StatData
  index: number
  onUpdate: (index: number, field: 'number' | 'label', value: string) => void
  isVisible: boolean
}) {
  const countUp = useCountUp({
    end: stat.numericValue,
    duration: 2000 + (index * 200), // Stagger animations
    suffix: stat.suffix
  })

  useEffect(() => {
    if (isVisible && !countUp.isActive) {
      countUp.startAnimation()
    }
  }, [isVisible, countUp])

  return (
    <div className={`stat stat-animate ${isVisible ? 'stat-visible' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
      <CMSControl
        elementId={`stat${index + 1}Number`}
        content={stat.number}
        onUpdate={(value) => onUpdate(index, 'number', value)}
      >
        <span className="stat__number">{countUp.count}</span>
      </CMSControl>
      
      <CMSControl
        elementId={`stat${index + 1}Label`}
        content={stat.label}
        onUpdate={(value) => onUpdate(index, 'label', value)}
      >
        <span className="stat__label">{stat.label}</span>
      </CMSControl>
    </div>
  )
}

export default function StatsSection() {
  const [title, setTitle] = useState("Our Impact in Numbers")
  const [stats, setStats] = useState<StatData[]>([
    { number: "22,500+", label: "Active Members", numericValue: 22500, suffix: "+" },
    { number: "200+", label: "Events Hosted", numericValue: 200, suffix: "+" },
    { number: "50+", label: "Multinational Partners", numericValue: 50, suffix: "+" },
    { number: "20+", label: "Global Delegations", numericValue: 20, suffix: "+" }
  ])

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  })

  const handleStatUpdate = (index: number, field: 'number' | 'label', value: string) => {
    setStats(prev => 
      prev.map((stat, i) => 
        i === index ? { ...stat, [field]: value } : stat
      )
    )
  }

  return (
    <section className="section stats" id="impact" ref={elementRef}>
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

        <div className="grid grid--4">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              stat={stat}
              index={index}
              onUpdate={handleStatUpdate}
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  )
}