'use client'

import { useState } from 'react'
import CMSControl from './CMS/CMSControl'

export default function Footer() {
  const [footerText, setFooterText] = useState("© 2025 mHealth Israel. All Rights Reserved.")

  return (
    <footer className="section" style={{ background: 'var(--secondary-dark)' }}>
      <div className="container">
        <div className="text-center">
          <CMSControl
            elementId="footerText"
            content={footerText}
            onUpdate={setFooterText}
          >
            <p className="text">{footerText}</p>
          </CMSControl>
          
          <div className="mt-3">
            <a 
              href="https://www.linkedin.com/groups/4703553/" 
              className="btn btn--secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" style={{ marginRight: 'var(--spacing-xs)' }}></i>
              Join Our LinkedIn Group
            </a>
          </div>
          
          <div className="mt-4" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
            <p>
              Website built by{' '}
              <a 
                href="https://tamirsida.github.io/portfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--accent-light)', 
                  textDecoration: 'underline',
                  fontWeight: '500'
                }}
              >
                Tamir Sida
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}