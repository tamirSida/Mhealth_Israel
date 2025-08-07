'use client'

import { useState } from 'react'
import CMSControl from './CMS/CMSControl'

interface StatData {
  number: string
  label: string
}

export default function StatsSection() {
  const [title, setTitle] = useState("Our Impact in Numbers")
  const [stats, setStats] = useState<StatData[]>([
    { number: "22,500+", label: "Active Members" },
    { number: "200+", label: "Events Hosted" },
    { number: "50+", label: "Multinational Partners" },
    { number: "20+", label: "Global Delegations" }
  ])

  const handleStatUpdate = (index: number, field: 'number' | 'label', value: string) => {
    setStats(prev => 
      prev.map((stat, i) => 
        i === index ? { ...stat, [field]: value } : stat
      )
    )
  }

  return (
    <section className="section stats" id="impact">
      <div className="container">
        <div className="text-center mb-5">
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
            <div key={index} className="stat">
              <CMSControl
                elementId={`stat${index + 1}Number`}
                content={stat.number}
                onUpdate={(value) => handleStatUpdate(index, 'number', value)}
              >
                <span className="stat__number">{stat.number}</span>
              </CMSControl>
              
              <CMSControl
                elementId={`stat${index + 1}Label`}
                content={stat.label}
                onUpdate={(value) => handleStatUpdate(index, 'label', value)}
              >
                <span className="stat__label">{stat.label}</span>
              </CMSControl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}