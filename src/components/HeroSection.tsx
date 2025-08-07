'use client'

import { useState } from 'react'
import CMSControl from './CMS/CMSControl'

export default function HeroSection() {
  const [content, setContent] = useState({
    subtitle: "Founded by Levi Shapiro in 2014",
    title: "Israel's Leading HealthTech & ClimaTech Community",
    description: '"Improving the human condition; enhancing global health."'
  })

  const handleContentUpdate = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }))
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="section section--hero" id="home">
      <div className="container">
        <div className="hero__content fade-in">
          <CMSControl
            elementId="heroSubtitle"
            content={content.subtitle}
            onUpdate={(value) => handleContentUpdate('subtitle', value)}
          >
            <p className="hero__subtitle">{content.subtitle}</p>
          </CMSControl>
          
          <CMSControl
            elementId="heroTitle"
            content={content.title}
            onUpdate={(value) => handleContentUpdate('title', value)}
          >
            <h1 className="hero__title">{content.title}</h1>
          </CMSControl>
          
          <CMSControl
            elementId="heroDescription"
            content={content.description}
            onUpdate={(value) => handleContentUpdate('description', value)}
          >
            <p className="hero__description">{content.description}</p>
          </CMSControl>
          
          <div className="hero__cta">
            <a 
              href="#impact" 
              className="btn btn--primary btn--large"
              onClick={(e) => handleNavClick(e, '#impact')}
            >
              Explore Our Impact
            </a>
            <a 
              href="#about" 
              className="btn btn--secondary btn--large"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}