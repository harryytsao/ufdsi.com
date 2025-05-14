"use client";

import React from 'react';

interface EventFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const EventFilter: React.FC<EventFilterProps> = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'meetup', label: 'Meetups' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'conference', label: 'Conferences' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export { EventFilter }; 