'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
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
    closeMobileMenu()
  }

  return (
    <nav 
      className="nav" 
      style={{ 
        background: navScrolled 
          ? 'rgba(26, 26, 46, 0.98)' 
          : 'rgba(26, 26, 46, 0.95)' 
      }}
    >
      <div className="nav__container">
          <a href="/" className="nav__logo" onClick={(e) => {
            e.preventDefault()
            // If we're already on home page, scroll to top
            if (window.location.pathname === '/') {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            } else {
              // If on subpage, navigate to home
              window.location.href = '/'
            }
          }}>
            <Image 
              src="/logo.png" 
              alt="mHealth Israel" 
              width={120} 
              height={40}
              priority
              style={{ objectFit: 'contain' }}
            />
          </a>
          
          <ul className="nav__menu">
            <li><a href="#about" className="nav__link" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
            <li><a href="#impact" className="nav__link" onClick={(e) => handleNavClick(e, '#impact')}>Impact</a></li>
            <li><a href="#ecosystem" className="nav__link" onClick={(e) => handleNavClick(e, '#ecosystem')}>Ecosystem</a></li>
            <li><a href="#upcoming-events" className="nav__link" onClick={(e) => handleNavClick(e, '#upcoming-events')}>Events</a></li>
            <li>
              <a 
                href="https://www.linkedin.com/groups/4703553/" 
                className="btn btn--primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Community
              </a>
            </li>
          </ul>

          <button className="nav__toggle" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>

          <div className={`nav__menu--mobile ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav__link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a href="#impact" className="nav__link" onClick={(e) => handleNavClick(e, '#impact')}>Impact</a>
            <a href="#ecosystem" className="nav__link" onClick={(e) => handleNavClick(e, '#ecosystem')}>Ecosystem</a>
            <a href="#upcoming-events" className="nav__link" onClick={(e) => handleNavClick(e, '#upcoming-events')}>Events</a>
            <a 
              href="https://www.linkedin.com/groups/4703553/" 
              className="btn btn--primary" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              Join Community
            </a>
          </div>
        </div>
    </nav>
  )
}