"use client";

import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@/styles/calendar.css';
import { events, Event, getUpcomingEvents } from '@/data/events';
import { EventCard } from './EventCard';
import { EventFilter } from './EventFilter';
import { motion } from 'framer-motion';

// Setup the localizer for BigCalendar
const localizer = momentLocalizer(moment);

const Calendar: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [viewType, setViewType] = useState<'calendar' | 'list'>('list');

  useEffect(() => {
    // Filter events based on the active filter
    if (activeFilter === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.type === activeFilter));
    }

    // Get upcoming events
    setUpcomingEvents(getUpcomingEvents(3));
  }, [activeFilter]);

  // Custom event styling for the calendar
  const eventStyleGetter = (event: Event) => {
    let backgroundColor = '#3788d8';
    
    switch (event.type) {
      case 'workshop':
        backgroundColor = '#3788d8';
        break;
      case 'meetup':
        backgroundColor = '#38a169';
        break;
      case 'hackathon':
        backgroundColor = '#805ad5';
        break;
      case 'conference':
        backgroundColor = '#dd6b20';
        break;
      case 'other':
        backgroundColor = '#718096';
        break;
    }
    
    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        opacity: 0.9,
        color: 'white',
        border: '0',
        display: 'block',
        fontWeight: 'bold',
      }
    };
  };

  const toggleViewType = () => {
    setViewType(prev => prev === 'calendar' ? 'list' : 'calendar');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* View toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setViewType('list')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              viewType === 'list'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            } border border-gray-200 dark:border-gray-600`}
          >
            List View
          </button>
          <button
            type="button"
            onClick={() => setViewType('calendar')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              viewType === 'calendar'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            } border border-gray-200 dark:border-gray-600`}
          >
            Calendar View
          </button>
        </div>
      </div>

      {/* Event filters */}
      <EventFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Upcoming events section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map(event => (
            <motion.div 
              key={event.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main calendar/list view */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          {activeFilter === 'all' ? 'All Events' : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}s`}
        </h2>

        {viewType === 'calendar' ? (
          <div className="h-[600px]">
            <BigCalendar
              localizer={localizer}
              events={filteredEvents}
              startAccessor="start"
              endAccessor="end"
              eventPropGetter={eventStyleGetter}
              views={['month', 'week', 'day']}
              className="rounded-lg overflow-hidden"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 col-span-2">
                No events found for this filter.
              </p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export { Calendar };
