'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import CMSControl from './CMS/CMSControl'

export default function EventsSection() {
  const [content, setContent] = useState({
    title: "Connect and Learn with Global Leaders",
    subtitle: "From exclusive dealmaker webinars to our flagship annual conference, we provide unparalleled access to the people shaping the future of health."
  })

  const { isAdmin } = useAuth()

  const handleContentUpdate = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }))
  }

  const openCMS = () => {
    alert('Full CMS interface would open here - manage all content, create events, etc.')
  }

  return (
    <section className="section" id="events">
      <div className="container">
        <div className="text-center mb-5">
          <CMSControl
            elementId="eventsTitle"
            content={content.title}
            onUpdate={(value) => handleContentUpdate('title', value)}
          >
            <h2 className="heading heading--2">{content.title}</h2>
          </CMSControl>
          
          <CMSControl
            elementId="eventsSubtitle"
            content={content.subtitle}
            onUpdate={(value) => handleContentUpdate('subtitle', value)}
          >
            <p className="text text--large">{content.subtitle}</p>
          </CMSControl>
        </div>

        <div className="text-center">
          <a 
            href="#home" 
            className="btn btn--primary btn--large"
            onClick={(e) => {
              e.preventDefault()
              const target = document.querySelector('#home')
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }
            }}
          >
            Back to Home
          </a>
          {isAdmin && (
            <button onClick={openCMS} className="btn btn--secondary btn--large">
              Manage Content
            </button>
          )}
        </div>
      </div>
    </section>
  )
}