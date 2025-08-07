'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CMSControl from '@/components/CMS/CMSControl'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  type: 'webinar' | 'conference' | 'networking' | 'workshop'
  registrationLink: string
}

export default function EventsPage() {
  const [pageContent, setPageContent] = useState({
    title: "Upcoming Events",
    subtitle: "Join us for exclusive events that connect, educate, and inspire the global health tech community."
  })

  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Digital Health Innovation Summit 2025",
      date: "2025-03-15",
      time: "09:00 - 17:00",
      location: "Tel Aviv Convention Center",
      description: "Our flagship annual conference bringing together 500+ leaders in digital health, featuring keynotes from industry pioneers and interactive workshops.",
      type: "conference",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "AI in Diagnostics: Dealmaker Webinar",
      date: "2025-02-20",
      time: "16:00 - 17:30",
      location: "Virtual Event",
      description: "Exclusive webinar featuring leading VCs and startups in the AI diagnostics space. Learn about the latest funding trends and breakthrough technologies.",
      type: "webinar",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "ClimaTech & Health Networking Evening",
      date: "2025-02-28",
      time: "18:00 - 21:00",
      location: "Sarona Market, Tel Aviv",
      description: "Connect with entrepreneurs and investors focused on the intersection of climate technology and human health.",
      type: "networking",
      registrationLink: "#"
    }
  ])

  const handleContentUpdate = (key: string, value: string) => {
    setPageContent(prev => ({ ...prev, [key]: value }))
  }

  const getEventTypeIcon = (type: Event['type']) => {
    switch (type) {
      case 'conference':
        return 'fas fa-users'
      case 'webinar':
        return 'fas fa-video'
      case 'networking':
        return 'fas fa-handshake'
      case 'workshop':
        return 'fas fa-tools'
      default:
        return 'fas fa-calendar'
    }
  }

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'conference':
        return 'var(--primary-orange)'
      case 'webinar':
        return 'var(--accent-light)'
      case 'networking':
        return 'var(--primary-teal)'
      case 'workshop':
        return 'var(--primary-red)'
      default:
        return 'var(--text-secondary)'
    }
  }

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section section--hero" style={{ minHeight: '60vh' }}>
          <div className="container">
            <div className="hero__content fade-in">
              <CMSControl
                elementId="eventsPageTitle"
                content={pageContent.title}
                onUpdate={(value) => handleContentUpdate('title', value)}
              >
                <h1 className="hero__title">{pageContent.title}</h1>
              </CMSControl>
              
              <CMSControl
                elementId="eventsPageSubtitle"
                content={pageContent.subtitle}
                onUpdate={(value) => handleContentUpdate('subtitle', value)}
              >
                <p className="hero__description">{pageContent.subtitle}</p>
              </CMSControl>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="section">
          <div className="container">
            <div className="grid grid--2">
              {events.map((event) => (
                <div key={event.id} className="card">
                  <div className="card__header">
                    <div className="d-flex align-center mb-2">
                      <i 
                        className={getEventTypeIcon(event.type)}
                        style={{ 
                          color: getEventTypeColor(event.type),
                          marginRight: 'var(--spacing-sm)',
                          fontSize: 'var(--font-size-lg)'
                        }}
                      ></i>
                      <span 
                        style={{ 
                          color: getEventTypeColor(event.type),
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          fontSize: 'var(--font-size-sm)'
                        }}
                      >
                        {event.type}
                      </span>
                    </div>
                    <h3 className="card__title">{event.title}</h3>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-center mb-1">
                      <i className="fas fa-calendar" style={{ marginRight: 'var(--spacing-sm)', color: 'var(--text-muted)' }}></i>
                      <span className="text">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="d-flex align-center mb-1">
                      <i className="fas fa-clock" style={{ marginRight: 'var(--spacing-sm)', color: 'var(--text-muted)' }}></i>
                      <span className="text">{event.time}</span>
                    </div>
                    <div className="d-flex align-center mb-3">
                      <i className="fas fa-map-marker-alt" style={{ marginRight: 'var(--spacing-sm)', color: 'var(--text-muted)' }}></i>
                      <span className="text">{event.location}</span>
                    </div>
                  </div>

                  <p className="text mb-4">{event.description}</p>

                  <a 
                    href={event.registrationLink} 
                    className="btn btn--primary"
                    style={{ width: '100%' }}
                  >
                    Register Now
                  </a>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-6">
              <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h3 className="heading heading--3">Want to Host an Event?</h3>
                <p className="text mb-4">
                  Join our community of event organizers and help shape the future of health technology in Israel.
                </p>
                <a href="mailto:events@mhealthisrael.org" className="btn btn--secondary btn--large">
                  Propose an Event
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}