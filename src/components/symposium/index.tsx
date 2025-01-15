'use client';

import React, { useState } from 'react';

const SymposiumSchedule = () => {
  const [selectedType, setSelectedType] = useState('all');
  const schedule = [
    {
      time: "7:30 - 8:00",
      event: "Breakfast",
      type: "break",
      color: "bg-amber-50"
    },
    {
      time: "8:00 - 9:00",
      event: "Keynote Speaker (Opening)",
      type: "keynote",
      color: "bg-blue-50"
    },
    {
      time: "9:00 - 10:00",
      event: "Event Session",
      type: "sessions",
      tracks: {
        industry: "(To be announced)",
        research: "(To be announced)",
        workshops: "(To be announced)"
      },
      color: "bg-purple-50"
    },
    {
      time: "10:00 - 10:10",
      event: "Coffee Break",
      type: "break",
      color: "bg-amber-50"
    },
    {
      time: "10:10 - 11:10",
      event: "Event Session",
      type: "sessions",
      tracks: {
        industry: "(To be announced)",
        research: "(To be announced)",
        workshops: "(To be announced)"
      },
      color: "bg-purple-50"
    },
    {
      time: "11:10 - 11:20",
      event: "Coffee Break",
      type: "break",
      color: "bg-amber-50"
    },
    {
      time: "11:20 - 12:20",
      event: "Event Session",
      type: "sessions",
      tracks: {
        industry: "(To be announced)",
        research: "(To be announced)",
        workshops: "(To be announced)"
      },
      color: "bg-purple-50"
    },
    {
      time: "12:20 - 12:50",
      event: "Lunch Break",
      type: "break",
      color: "bg-amber-50"
    },
    {
      time: "12:50 - 1:20",
      event: "Student Poster Sessions",
      type: "special",
      color: "bg-emerald-50"
    },
    {
      time: "1:20 - 1:30",
      event: "Coffee Break",
      type: "break",
      color: "bg-amber-50"
    },
    {
      time: "1:30 - 2:30",
      event: "Event Session",
      type: "sessions",
      tracks: {
        industry: "(To be announced)",
        research: "(To be announced)",
        workshops: "(To be announced)"
      },
      color: "bg-purple-50"
    },
    {
      time: "2:30 - 2:40",
      event: "Coffee Break",
      type: "break",
      color: "bg-amber-50"
    },
    {
      time: "2:40 - 3:40",
      event: "Event Session",
      type: "sessions",
      tracks: {
        industry: "(To be announced)",
        research: "(To be announced)",
        workshops: "(To be announced)"
      },
      color: "bg-purple-50"
    },
    {
      time: "3:40 - 3:50",
      event: "Coffee Break",
      type: "break",
      color: "bg-amber-50"
    },
    {
      time: "3:50 - 4:50",
      event: "Event Session",
      type: "sessions",
      tracks: {
        industry: "(To be announced)",
        research: "(To be announced)",
        workshops: "(To be announced)"
      },
      color: "bg-purple-50"
    },
    {
      time: "4:50 - 5:00",
      event: "Closing",
      type: "keynote",
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pt-16 sm:pt-24 pb-8">
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">DSI Spring Symposium 2025</h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join us for a day of learning, networking, and innovation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="border rounded-lg shadow-sm bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">About the Symposium</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            The Data Science and Informatics (DSI) club at the University of Florida proudly presents our Spring Symposium.
            This dynamic event brings together students, faculty, and industry professionals for a day of knowledge sharing
            and networking in the field of data science.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            The symposium features an impressive lineup of 18 speakers and 6 interactive workshops spread across multiple tracks.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Sessions will be held in five distinct locations within the Reitz Union, including the main Auditorium
            for opening and closing ceremonies, and four medium-sized rooms dedicated to specific tracks.
          </p>
        </div>

        <div className="border rounded-lg shadow-sm bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Event Details</h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
            <div>
              <p className="mb-2">📍 Location:</p>
              <a
                href="https://maps.app.goo.gl/qfhEnip1UEGpFeTj9"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 text-blue-600 hover:text-blue-800 hover:underline"
              >
                Reitz Union
              </a>
              <p className="ml-6 text-sm">University of Florida</p>
            </div>
            <div>
              <p className="mb-2">🏛️ Venues:</p>
              <ul className="ml-6 list-disc list-inside text-sm space-y-1">
                <li>Main Auditorium (Opening/Closing)</li>
                <li>4 Medium Rooms (Track Sessions)</li>
              </ul>
            </div>
            <p>📅 Date: April 5, 2025</p>
            <p>🎯 Focus: Data Science & Analytics</p>
            <p>👥 Open to: All UF Students</p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg shadow-sm bg-white mb-8 sm:mb-12">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Event Schedule</h2>

          {/* Filter Buttons */}
          <div className="mb-4 sm:mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedType === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedType('sessions')}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedType === 'sessions' ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              Event Sessions
            </button>
            <button
              onClick={() => setSelectedType('break')}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedType === 'break' ? 'bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              Breaks
            </button>
          </div>

          <div className="max-h-[500px] sm:max-h-[600px] overflow-y-auto pr-2">
            <div className="space-y-2">
              {schedule
                .filter(item => selectedType === 'all' || item.type === selectedType)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} border border-gray-100 p-3 sm:p-4 rounded-lg transition-all hover:shadow-md`}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                      <span className="font-medium text-gray-700 sm:w-32">
                        {item.time}
                      </span>
                      <div className="flex-1">
                        <span className="font-medium text-gray-800">
                          {item.event}
                        </span>
                        {item.tracks && (
                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-600">Industry:</span>
                              <p className="text-gray-500">{item.tracks.industry}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-600">Research:</span>
                              <p className="text-gray-500">{item.tracks.research}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-600">Workshops:</span>
                              <p className="text-gray-500">{item.tracks.workshops}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Registration</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
          Register now to secure your spot at the symposium.
        </p>
        <button className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default SymposiumSchedule;