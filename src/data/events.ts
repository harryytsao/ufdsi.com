"use client";

export interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: string;
  type: 'workshop' | 'meetup' | 'hackathon' | 'conference' | 'other';
  url?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Introduction to Data Science Workshop',
    start: new Date(new Date().setDate(new Date().getDate() + 3)),
    end: new Date(new Date().setDate(new Date().getDate() + 3)),
    description: 'Learn the basics of data science including data cleaning, analysis, and visualization.',
    location: 'Marston Science Library, Room 308',
    type: 'workshop',
    url: 'https://ufl.zoom.us/meeting/register/123456'
  },
  {
    id: 2,
    title: 'Machine Learning Study Group',
    start: new Date(new Date().setDate(new Date().getDate() + 5)),
    end: new Date(new Date().setDate(new Date().getDate() + 5)),
    description: 'Weekly study group focusing on machine learning algorithms and implementations.',
    location: 'Online via Zoom',
    type: 'meetup',
    url: 'https://ufl.zoom.us/meeting/register/789012'
  },
  {
    id: 3,
    title: 'Data Visualization Hackathon',
    start: new Date(new Date().setDate(new Date().getDate() + 10)),
    end: new Date(new Date().setDate(new Date().getDate() + 11)),
    description: 'A 24-hour hackathon focused on creating impactful data visualizations.',
    location: 'Reitz Union Grand Ballroom',
    type: 'hackathon',
    url: 'https://forms.gle/hackathon-registration'
  },
  {
    id: 4,
    title: 'Python for Data Analysis Workshop',
    start: new Date(new Date().setDate(new Date().getDate() + 14)),
    end: new Date(new Date().setDate(new Date().getDate() + 14)),
    description: 'Hands-on workshop covering pandas, numpy, and matplotlib for data analysis.',
    location: 'CSE Building, Room E221',
    type: 'workshop',
    url: 'https://ufl.zoom.us/meeting/register/345678'
  },
  {
    id: 5,
    title: 'Florida Data Science Conference',
    start: new Date(new Date().setDate(new Date().getDate() + 20)),
    end: new Date(new Date().setDate(new Date().getDate() + 22)),
    description: 'Annual conference bringing together data scientists from across Florida.',
    location: 'UF Hilton Conference Center',
    type: 'conference',
    url: 'https://fldata.science/conference'
  },
  {
    id: 6,
    title: 'Deep Learning with TensorFlow',
    start: new Date(new Date().setDate(new Date().getDate() + 25)),
    end: new Date(new Date().setDate(new Date().getDate() + 25)),
    description: 'Workshop on building neural networks with TensorFlow and Keras.',
    location: 'Marston Science Library, Room 308',
    type: 'workshop',
    url: 'https://ufl.zoom.us/meeting/register/901234'
  },
  {
    id: 7,
    title: 'Data Ethics Panel Discussion',
    start: new Date(new Date().setDate(new Date().getDate() + 30)),
    end: new Date(new Date().setDate(new Date().getDate() + 30)),
    description: 'Panel discussion on ethical considerations in data science and AI.',
    location: 'Pugh Hall Ocora',
    type: 'other',
    url: 'https://ufl.zoom.us/meeting/register/567890'
  }
];

export const getUpcomingEvents = (count: number = 3): Event[] => {
  const now = new Date();
  return events
    .filter(event => event.start >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, count);
};

export const getEventsByType = (type: Event['type']): Event[] => {
  return events.filter(event => event.type === type);
}; 