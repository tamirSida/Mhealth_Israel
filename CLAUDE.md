# mHealth Israel Website - Development Guide

## Project Overview
- **Client**: mHealth Israel - Israel's largest HealthTech/ClimaTech community
- **Tech Stack**: Next.js 15, TypeScript, CSS Custom Properties
- **Members**: 22,500+ healthcare innovators, entrepreneurs, investors
- **Funding**: $1.16B+ raised by community
- **Developer**: Tamir Sida (https://tamirsida.github.io/portfolio/)

## Key Features Implemented
- **HLTH.com-style horizontal swipe event cards** with touch/arrow navigation
- **Fast marquee stats section** (8s desktop, 6s tablet, 5s mobile) in hero
- **Sequential loading**: Hero content first (1.2s delay) → then marquee
- **Mobile-first responsive design** with proper viewport handling
- **Comprehensive SEO optimization** for HealthTech keywords

## Design System
- **Colors**: Orange (#FF6B35), Teal (#4A9B8E), Dark (#1A1A2E)
- **No emojis allowed** - FontAwesome icons only
- **Modern clean cards** with proper spacing and hover effects
- **Gradient accents** and logo-themed visual elements

## Component Architecture
- `ParallaxHero`: Hero section with integrated marquee stats
- `UpcomingEvents`: HLTH-style horizontal swipe cards (NO /events page)
- `Navigation`: Logo navigation with smooth scroll
- `Footer`: LinkedIn button + Tamir credit
- `StatsSection`: REMOVED (integrated into hero)

## SEO Configuration
- **Primary Keywords**: mHealth Israel, HealthTech Israel, Digital Health Israel
- **Meta Description**: Community size + funding stats for credibility
- **Schema.org**: Organization markup for healthcare community
- **Social Media**: OpenGraph + Twitter Cards optimized

## Development Commands
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run lint`: Code linting

## Important Notes
- **Event cards**: Clean vertical layout, color-coded badges, full-width buttons
- **Marquee timing**: Must load AFTER hero content (1.2s delay)
- **Mobile priority**: All designs mobile-first, no hover-dependent UX
- **Logo branding**: Animated accents with staggered timing
- **LinkedIn integration**: Proper spacing on icon + community link