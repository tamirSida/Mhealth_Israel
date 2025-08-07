import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'mHealth Israel - Leading HealthTech & Digital Health Community | 22,500+ Members',
  description: "Join Israel's largest HealthTech community with 22,500+ healthcare innovators, entrepreneurs, and investors. Connect with digital health startups, medical device companies, and AI healthcare solutions. $1.16B+ funding raised.",
  keywords: [
    'mHealth Israel',
    'HealthTech Israel', 
    'Digital Health Israel',
    'Healthcare Innovation Israel',
    'Medical Technology Israel',
    'Health Startups Israel',
    'Israeli HealthTech',
    'Digital Therapeutics Israel',
    'Telemedicine Israel',
    'Healthcare Entrepreneurs Israel',
    'Medical Device Innovation',
    'AI Healthcare Israel',
    'Healthcare Investors Israel',
    'Health Innovation Community',
    'Digital Health Ecosystem',
    'ClimaTech Health Israel',
    'Healthcare Networking Israel',
    'MedTech Israel',
    'Health Technology Tel Aviv',
    'Israeli Medical Innovation'
  ].join(', '),
  authors: [{ name: 'mHealth Israel Community' }],
  creator: 'mHealth Israel',
  publisher: 'mHealth Israel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mhealthisrael.org',
    title: 'mHealth Israel - Leading HealthTech & Digital Health Community',
    description: "Join Israel's largest HealthTech community with 22,500+ healthcare innovators. Connect with digital health startups and medical technology companies.",
    siteName: 'mHealth Israel',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'mHealth Israel - HealthTech Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mHealth Israel - Leading HealthTech Community',
    description: "Israel's largest HealthTech community with 22,500+ members. Join healthcare innovators and entrepreneurs.",
    images: ['/logo.png'],
    creator: '@mHealthIsrael',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://mhealthisrael.org',
  },
  category: 'Healthcare Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "mHealth Israel",
              "alternateName": "mHealth Israel Community",
              "description": "Israel's largest HealthTech and ClimaTech community connecting healthcare innovators, entrepreneurs, and investors.",
              "url": "https://mhealthisrael.org",
              "logo": "https://mhealthisrael.org/logo.png",
              "sameAs": [
                "https://www.linkedin.com/groups/4703553/"
              ],
              "memberOf": {
                "@type": "Thing",
                "name": "HealthTech Community"
              },
              "knowsAbout": [
                "Digital Health",
                "HealthTech",
                "Medical Technology", 
                "Healthcare Innovation",
                "Digital Therapeutics",
                "Telemedicine",
                "AI in Healthcare",
                "Medical Devices"
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "Healthcare Professionals, Entrepreneurs, Investors"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Israel"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}