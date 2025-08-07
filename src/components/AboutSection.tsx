'use client'

import { useState } from 'react'
import CMSControl from './CMS/CMSControl'

interface FocusArea {
  title: string
  description: string
}

export default function AboutSection() {
  const [content, setContent] = useState({
    title: "Building Israel's Innovation Ecosystem",
    description: "mHealth Israel serves as a vital catalyst, connecting over 22,500 members from the technology and healthcare sectors. Founded in 2014 by digital health pioneer Levi Shapiro, our mission is to improve global health by fostering innovation and connecting Israeli startups with global partners, investors, and industry leaders."
  })

  const [focusAreas, setFocusAreas] = useState<FocusArea[]>([
    {
      title: "HealthTech Focus",
      description: "Digital Health, MedTech, AI in diagnostics, medical devices, clinical intelligence, genomics, and digital therapeutics."
    },
    {
      title: "ClimaTech Expansion", 
      description: "Recognizing the link between planetary health and human health, featuring companies in alternative proteins and biodiversity preservation."
    }
  ])

  const handleContentUpdate = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }))
  }

  const handleFocusAreaUpdate = (index: number, field: 'title' | 'description', value: string) => {
    setFocusAreas(prev =>
      prev.map((area, i) =>
        i === index ? { ...area, [field]: value } : area
      )
    )
  }

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <CMSControl
            elementId="aboutTitle"
            content={content.title}
            onUpdate={(value) => handleContentUpdate('title', value)}
          >
            <h2 className="heading heading--2">{content.title}</h2>
          </CMSControl>
          
          <CMSControl
            elementId="aboutDescription"
            content={content.description}
            onUpdate={(value) => handleContentUpdate('description', value)}
          >
            <p className="text text--large" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {content.description}
            </p>
          </CMSControl>
        </div>

        <div className="grid grid--2">
          {focusAreas.map((area, index) => (
            <div key={index} className="card">
              <div className="card__header">
                <CMSControl
                  elementId={`focus${index + 1}Title`}
                  content={area.title}
                  onUpdate={(value) => handleFocusAreaUpdate(index, 'title', value)}
                >
                  <h3 className="card__title">{area.title}</h3>
                </CMSControl>
              </div>
              
              <CMSControl
                elementId={`focus${index + 1}Description`}
                content={area.description}
                onUpdate={(value) => handleFocusAreaUpdate(index, 'description', value)}
              >
                <p className="text">{area.description}</p>
              </CMSControl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}