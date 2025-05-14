"use client";

import React from 'react';
import { Event } from '@/data/events';
import { format } from 'date-fns';
import Link from 'next/link';
import { AddToCalendarButton } from './AddToCalendarButton';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventTypeColors = {
    workshop: 'bg-blue-100 text-blue-800',
    meetup: 'bg-green-100 text-green-800',
    hackathon: 'bg-purple-100 text-purple-800',
    conference: 'bg-orange-100 text-orange-800',
    other: 'bg-gray-100 text-gray-800',
  };

  const isMultiDay = event.start.toDateString() !== event.end.toDateString();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${eventTypeColors[event.type]}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          <div className="text-right">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {format(event.start, 'MMM d')}
              {isMultiDay && ` - ${format(event.end, 'MMM d')}`}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {format(event.start, 'h:mm a')}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="flex items-start mb-4">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">{event.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <AddToCalendarButton event={event} />
          
          {event.url && (
            <Link 
              href={event.url} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { EventCard }; 