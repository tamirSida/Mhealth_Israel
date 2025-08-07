# mHealth Israel - Next.js Application

A modern, mobile-first website for mHealth Israel, the leading HealthTech & ClimaTech community in Israel with 22,500+ members.

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Next.js 15**: Latest Next.js with App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Component-Based Architecture**: Reusable React components following OOP principles
- **CMS Integration**: Content management system with Firebase backend
- **Emotional Design**: UX principles focused on building community and trust
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project (for CMS functionality)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication and Firestore
   - Copy your Firebase config values

4. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your Firebase credentials

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── events/         # Events page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── CMS/           # Content management components
│   ├── AboutSection.tsx
│   ├── EcosystemSection.tsx
│   ├── EventsSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   └── StatsSection.tsx
├── hooks/             # Custom React hooks
│   └── useCMS.ts      # CMS functionality hook
└── lib/               # Utility libraries
    ├── cms.ts         # CMS service functions
    └── firebase.ts    # Firebase configuration
```

## Design System

The application uses a comprehensive CSS custom properties system:

### Color Palette
- **Primary Orange**: `#FF6B35` (from logo)
- **Primary Red**: `#E74C3C` (from logo)
- **Primary Teal**: `#4A9B8E` (from logo)
- **Accent Light**: `#64FFDA`
- **Dark Backgrounds**: `#1A1A2E`, `#16213E`

### Component Classes
- `.btn` - Button components with variants (`--primary`, `--secondary`, `--large`)
- `.card` - Content cards with hover effects
- `.section` - Page sections with consistent spacing
- `.grid` - Responsive grid system (`--2`, `--3`, `--4` columns)
- `.heading` - Typography hierarchy (`--1`, `--2`, `--3`)

## CMS Functionality

### Content Management
- **Inline Editing**: Click edit buttons to modify content directly
- **Firebase Integration**: Content saved to Firestore database
- **Real-time Updates**: Changes reflect immediately in the UI
- **Type Safety**: All content operations are type-safe

### Usage
```tsx
import { useCMS } from '@/hooks/useCMS'

function MyComponent() {
  const { content, updateContent } = useCMS('elementId', 'Default content', {
    saveToFirebase: true,
    autoLoad: true
  })

  return (
    <CMSControl
      elementId="elementId"
      content={content}
      onUpdate={updateContent}
    >
      <h1>{content}</h1>
    </CMSControl>
  )
}
```

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub repository
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on git push

## Firebase Setup

1. Create a new Firebase project
2. Enable Authentication (optional, for admin features)
3. Enable Firestore Database
4. Set Firestore rules (example):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /content/{document} {
         allow read: if true;
         allow write: if request.auth != null; // Only authenticated users can edit
       }
     }
   }
   ```

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Font Loading**: Optimized Google Fonts loading with `display: swap`
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **CSS Optimization**: Custom properties for consistent theming
- **Responsive Images**: Multiple image sizes for different screen sizes

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Android Chrome 90+)

## License

© 2025 mHealth Israel. All Rights Reserved.

## Support

For technical support, please contact the development team or refer to the Next.js documentation at [https://nextjs.org/docs](https://nextjs.org/docs).