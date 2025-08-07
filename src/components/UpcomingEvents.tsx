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
                <img 
                  className="event-image" 
                  src={`/events/${event.id}.jpg`} 
                  alt="Event image" 
                  onError={(e) => {
                    // Hide image and let gradient background show
                    (e.target as HTMLImageElement).style.display = 'none';
                  }} 
                />
                <div className="footer-gradient"></div>
                <div className="event-overlay">
                  <div className="event-logo">
                    <div className="event-type-indicator" style={{ backgroundColor: getEventTypeColor(event.type) }}>
                      {event.type.toUpperCase()}
                    </div>
                  </div>
                  <p className="event-dates">
                    {formatEventDate(event.date)} | {event.time}
                  </p>
                </div>
                <div className="event-description">
                  <p className="five-lines">{event.title}</p>
                  <div className="event-button">
                    <span className="btn btn--primary">Go to Event</span>
                  </div>
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