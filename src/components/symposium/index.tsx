'use client';

import React, { useState } from 'react';

const SymposiumSchedule = () => {
  const [selectedType, setSelectedType] = useState('all');
  const schedule = [
    {
      time: "7:00 - 8:00",
      event: "Registration and Coffee",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "8:00 - 9:00",
      event: "Keynote Speaker / Opening Ceremony",
      type: "keynote",
      color: "bg-blue-100"
    },
    {
      time: "9:15 - 10:15",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        speaker: "Dr. Aapo Hyvarinen",
        workshop: "DSI"
      },
      color: "bg-purple-50"
    },
    {
      time: "10:30 - 11:30",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        speaker: "Dr. Hubert Wagner",
        workshop: "IEEE SPS"
      },
      color: "bg-purple-50"
    },
    {
      time: "11:45 - 12:45",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        speaker: "Dr. Michael Skirpan",
        workshop: "ACM"
      },
      color: "bg-purple-50"
    },
    {
      time: "12:45 - 1:45",
      event: "Lunch and Student Poster Sessions",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "2:00 - 3:00",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        speaker: "Dr. Andrew Gelman",
        workshop: "Colorstack"
      },
      color: "bg-purple-50"
    },
    {
      time: "3:15 - 4:15",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        speaker: "TBA",
        workshop: "ASA"
      },
      color: "bg-purple-50"
    },
    {
      time: "4:30 - 5:30",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        speaker: "TBA",
        workshop: "UF AI Club"
      },
      color: "bg-purple-50"
    },
    {
      time: "5:45 - 6:30",
      event: "Closing Ceremony",
      type: "keynote",
      color: "bg-blue-100"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 sm:pt-28 pb-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">DSI Spring Symposium 2025</h1>
        <p className="text-base sm:text-lg mb-4">Join us for a day of learning, networking, and innovation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg shadow-sm bg-white p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">About the Symposium</h2>
          <p className="text-sm text-gray-700 mb-2">
            The DSI Spring Research Symposium is a full-day conference featuring expert speakers,
            hands-on workshops, and student research presentations focused on artificial intelligence,
            data science, and machine learning.
          </p>
          <p className="text-sm text-gray-700">
            Connect with industry leaders, faculty, and peers while exploring the latest trends in AI.
            Open to students of all majors and skill levels!
          </p>
        </div>

        <div className="border rounded-lg shadow-sm bg-white p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">Event Details</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Location:</p>
              </div>
              <a href="https://maps.app.goo.gl/qfhEnip1UEGpFeTj9" target="_blank" rel="noopener noreferrer"
                className="ml-6 text-blue-600 hover:text-blue-800 hover:underline">
                Reitz Union, University of Florida
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p>Venues:</p>
              </div>
              <p className="ml-6">Main Auditorium & 4 Track Session Rooms</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>Date: April 5, 2025</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p>Focus: Data Science & AI</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p>Open to: All UF Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg shadow-sm bg-white mb-6">
        <div className="p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl text-gray-700 font-semibold mb-3">Event Schedule</h2>
          <div className="grid grid-cols-1 gap-2">
            {schedule.map((item, index) => (
              <div key={index} className={`${item.color} rounded-lg p-3 transition-all duration-200 hover:shadow-md border border-gray-100`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="flex items-center gap-2 sm:w-32 shrink-0">
                    <div className="h-10 w-1 bg-blue-600 rounded-full hidden sm:block" />
                    <span className="font-medium text-gray-700 text-sm">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-gray-800">{item.event}</span>
                    {item.tracks && (
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-2 text-sm">
                          <div className="flex items-center gap-1 mb-1">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium text-gray-700">Speaker: {item.tracks.speaker}</span>
                          </div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-2 text-sm">
                          <div className="flex items-center gap-1 mb-1">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span className="font-medium text-gray-700">Workshop: {item.tracks.workshop}</span>
                          </div>
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

      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-800">Registration</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-5">Secure your spot for the DSI Spring Symposium 2025!</p>
        <a href="https://forms.gle/FkXfWQy7mE6dpYDF7" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default SymposiumSchedule;