export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: 'webinar' | 'conference' | 'networking' | 'workshop'
  description: string
  registrationUrl: string
}

// Centralized events data - in a real app, this would come from an API/database
export const eventsData: Event[] = [
  {
    id: '1',
    title: 'Digital Health Innovation Summit 2025',
    date: '2025-08-15',
    time: '09:00 - 17:00',
    location: 'Tel Aviv Convention Center',
    type: 'conference',
    description: 'Our flagship annual conference bringing together 500+ leaders in digital health, featuring keynotes from industry pioneers and interactive workshops.',
    registrationUrl: 'https://www.linkedin.com/groups/4703553/'
  },
  {
    id: '2',
    title: 'AI in Diagnostics: Dealmaker Webinar',
    date: '2025-08-20',
    time: '16:00 - 17:30',
    location: 'Virtual Event',
    type: 'webinar',
    description: 'Exclusive webinar featuring leading VCs and startups in the AI diagnostics space. Learn about the latest funding trends and breakthrough technologies.',
    registrationUrl: 'https://www.linkedin.com/groups/4703553/'
  },
  {
    id: '3',
    title: 'ClimaTech & Health Networking Evening',
    date: '2025-08-28',
    time: '18:00 - 21:00',
    location: 'Sarona Market, Tel Aviv',
    type: 'networking',
    description: 'Connect with entrepreneurs and investors focused on the intersection of climate technology and human health.',
    registrationUrl: 'https://www.linkedin.com/groups/4703553/'
  },
  {
    id: '4',
    title: 'MedTech Startup Pitch Workshop',
    date: '2025-09-05',
    time: '14:00 - 17:00',
    location: 'Microsoft Reactor, Herzliya',
    type: 'workshop',
    description: 'Workshop for early-stage MedTech startups to refine their pitch and connect with mentors from the healthcare investment community.',
    registrationUrl: 'https://www.linkedin.com/groups/4703553/'
  },
  {
    id: '5',
    title: 'Digital Therapeutics Deep Dive',
    date: '2025-09-12',
    time: '15:00 - 16:30',
    location: 'Online',
    type: 'webinar',
    description: 'Comprehensive webinar exploring the regulatory landscape and market opportunities in digital therapeutics.',
    registrationUrl: 'https://www.linkedin.com/groups/4703553/'
  },
  {
    id: '6',
    title: 'HealthTech Investor Forum',
    date: '2025-09-20',
    time: '18:30 - 21:00',
    location: 'Google Campus, Tel Aviv',
    type: 'networking',
    description: 'Exclusive networking event connecting HealthTech startups with leading investors and VCs in the Israeli ecosystem.',
    registrationUrl: 'https://www.linkedin.com/groups/4703553/'
  }
]

// Helper function to get upcoming events (next 3)
export const getUpcomingEvents = (limit: number = 3): Event[] => {
  const now = new Date()
  return eventsData
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit)
}

// Helper function to get all events
export const getAllEvents = (): Event[] => {
  return eventsData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

// Helper function to format date consistently
export const formatEventDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  })
}