'use client'

import { useState } from 'react'
import CMSControl from './CMS/CMSControl'

interface SuccessStory {
  company: string
  amount: string
  description: string
}

export default function EcosystemSection() {
  const [content, setContent] = useState({
    title: "The Pulse of Israeli Innovation",
    subtitle: "In the last quarter alone, our community has celebrated over $1.16 Billion in funding and acquisitions."
  })

  const [successStories, setSuccessStories] = useState<SuccessStory[]>([
    {
      company: "Aidoc",
      amount: "$150M", 
      description: "Funding for clinical AI solutions"
    },
    {
      company: "ForSight Robotics",
      amount: "$125M",
      description: "Cataract eye surgery robotics"
    },
    {
      company: "Beewise", 
      amount: "$50M",
      description: "ClimaTech - Protecting bee populations"
    }
  ])

  const handleContentUpdate = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }))
  }

  const handleSuccessStoryUpdate = (index: number, field: keyof SuccessStory, value: string) => {
    setSuccessStories(prev =>
      prev.map((story, i) =>
        i === index ? { ...story, [field]: value } : story
      )
    )
  }

  return (
    <section className="section" id="ecosystem">
      <div className="container">
        <div className="text-center mb-5">
          <CMSControl
            elementId="ecosystemTitle"
            content={content.title}
            onUpdate={(value) => handleContentUpdate('title', value)}
          >
            <h2 className="heading heading--2">{content.title}</h2>
          </CMSControl>
          
          <CMSControl
            elementId="ecosystemSubtitle"
            content={content.subtitle}
            onUpdate={(value) => handleContentUpdate('subtitle', value)}
          >
            <p className="text text--large">{content.subtitle}</p>
          </CMSControl>
        </div>

        <div className="grid grid--3">
          {successStories.map((story, index) => (
            <div key={index} className="card" id={`successCard${index + 1}`}>
              <CMSControl
                elementId={`success${index + 1}Company`}
                content={story.company}
                onUpdate={(value) => handleSuccessStoryUpdate(index, 'company', value)}
              >
                <h3 className="card__title">{story.company}</h3>
              </CMSControl>
              
              <CMSControl
                elementId={`success${index + 1}Amount`}
                content={story.amount}
                onUpdate={(value) => handleSuccessStoryUpdate(index, 'amount', value)}
              >
                <p className="card__number">{story.amount}</p>
              </CMSControl>
              
              <CMSControl
                elementId={`success${index + 1}Description`}
                content={story.description}
                onUpdate={(value) => handleSuccessStoryUpdate(index, 'description', value)}
              >
                <p className="text">{story.description}</p>
              </CMSControl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}