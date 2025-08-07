'use client'

import { useState, useRef } from 'react'
import CMSControl from './CMS/CMSControl'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { getAllEvents, formatEventDate, type Event } from '@/lib/eventsData'

export default function UpcomingEvents() {
  const [title, setTitle] = useState("Upcoming Events")
  const [subtitle, setSubtitle] = useState("Swipe to explore our healthcare innovation events")
  
  // Get all events for swipe interface
  const events = getAllEvents()
  
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  })

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'conference': return 'var(--primary-orange)'
      case 'webinar': return 'var(--primary-teal)'
      case 'networking': return 'var(--primary-red)'
      case 'workshop': return 'var(--accent-light)'
      default: return 'var(--accent-light)'
    }
  }

  const getEventTypeIcon = (type: Event['type']) => {
    switch (type) {
      case 'conference': return 'fas fa-users'
      case 'webinar': return 'fas fa-video'
      case 'networking': return 'fas fa-handshake'
      case 'workshop': return 'fas fa-tools'
      default: return 'fas fa-calendar'
    }
  }


  return (
    <section className="section upcoming-events" id="upcoming-events" ref={elementRef}>
      <div className="container">
        <div className={`text-center mb-5 fade-in-up ${isIntersecting ? 'animate' : ''}`}>
          <CMSControl
            elementId="upcomingEventsTitle"
            content={title}
            onUpdate={setTitle}
          >
            <h2 className="heading heading--2">{title}</h2>
          </CMSControl>
          
          <CMSControl
            elementId="upcomingEventsSubtitle"
            content={subtitle}
            onUpdate={setSubtitle}
          >
            <p className="text text--large" style={{ maxWidth: '600px', margin: '0 auto' }}>
              {subtitle}
            </p>
          </CMSControl>
        </div>

        <div className="events-scroll-container">
          {/* Left Arrow */}
          {showLeftArrow && (
            <div className="arrow-wrapper-left">
              <div className="arrow-horizontal-scroll left" onClick={scrollLeft}>
                <span className="arrow-icon">‹</span>
              </div>
            </div>
          )}

          {/* Events Wrapper - Horizontal Scroll */}
          <div 
            className="events-wrapper scrollable no-wrap"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className="event-card"
                onClick={() => window.open(event.registrationUrl, '_blank')}
              >
                <div 
                  className="event-type-badge"
                  style={{ backgroundColor: getEventTypeColor(event.type) }}
                >
                  {event.type}
                </div>
                
                <h3 className="event-card-title">{event.title}</h3>
                
                <div className="event-card-date">
                  <i className="fas fa-calendar"></i>
                  <span>{formatEventDate(event.date)}</span>
                </div>
                
                <div className="event-card-time">
                  <i className="fas fa-clock"></i>
                  <span>{event.time}</span>
                </div>
                
                <div className="event-card-button">
                  <span className="btn btn--primary">Register Now</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <div className="arrow-wrapper-right">
              <div className="arrow-horizontal-scroll right" onClick={scrollRight}>
                <span className="arrow-icon">›</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}