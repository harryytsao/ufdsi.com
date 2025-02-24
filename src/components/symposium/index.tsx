'use client';

import React, { useState } from 'react';

const SymposiumSchedule = () => {
  const [selectedType, setSelectedType] = useState('all');
  const schedule = [
    {
      time: "7:00 - 8:00",
      event: "Registration and Coffee Break",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "8:00 - 9:00",
      event: "Keynote Speaker: Jack Kendall, RainAI",
      type: "keynote",
      color: "bg-teal-50"
    },
    {
      time: "9:15 - 10:15",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        regular: "TBA",
        industry: "Carlos Bastos Neto, Google Cloud",
        speaker: "Dr. Aapo Hyvarinen",
        workshop: "SPS"
      },
      color: "bg-purple-50"
    },
    {
      time: "10:15 - 10:30",
      event: "Intercession",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "10:30 - 11:30",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        regular: "Dr. Megan Higgs",
        industry: "TBA",
        speaker: "Dr. Hubert Wagner",
        workshop: "ACM"
      },
      color: "bg-purple-50"
    },
    {
      time: "11:30 - 12:15",
      event: "Lunch Break",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "11:45 - 12:30",
      event: "Student Poster Sessions",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "12:30 - 12:45",
      event: "Intercession",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "12:45 - 1:45",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        regular: "Dr. Jim Hoover",
        industry: "TBA",
        speaker: "Dr. Andrew Gelman",
        workshop: "Colorstack"
      },
      color: "bg-purple-50"
    },
    {
      time: "1:45 - 2:00",
      event: "Intercession",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "2:00 - 3:00",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        regular: "TBA",
        industry: "TBA",
        speaker: "TBA",
        workshop: "ASA"
      },
      color: "bg-purple-50"
    },
    {
      time: "3:00 - 3:15",
      event: "Intercession",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "3:15 - 4:15",
      event: "Industry/Research Speakers + Workshop",
      type: "sessions",
      tracks: {
        regular: "TBA",
        industry: "TBA",
        speaker: "TBA",
        workshop: "AI Club"
      },
      color: "bg-purple-50"
    },
    {
      time: "4:15 - 4:30",
      event: "Intercession",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "4:30 - 5:00",
      event: "Closing Ceremony",
      type: "keynote",
      color: "bg-green-100"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 sm:pt-28 pb-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 mt-10">DSI Spring Symposium 2025</h1>
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
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-200">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700">
                                Regular Track
                              </span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 mb-1">Room 2325</span>
                            <span className="text-sm text-gray-800 font-medium">{item.tracks.regular}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-purple-200">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-md bg-purple-50 px-2.5 py-1.5 text-xs font-medium text-purple-700">
                                Industry Track
                              </span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 mb-1">Room 2330</span>
                            <span className="text-sm text-gray-800 font-medium">{item.tracks.industry}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-green-200">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-md bg-green-50 px-2.5 py-1.5 text-xs font-medium text-green-700">
                                Research Track
                              </span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 mb-1">Room 2335</span>
                            <span className="text-sm text-gray-800 font-medium">{item.tracks.speaker}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-indigo-200">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-700">
                                Workshop Track
                              </span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 mb-1">Room 2365</span>
                            <span className="text-sm text-gray-800 font-medium">{item.tracks.workshop} Workshop</span>
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

      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100 shadow-lg mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-800">Registration</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-5">Secure your spot for the DSI Spring Symposium 2025!</p>
        <a href="https://forms.gle/FkXfWQy7mE6dpYDF7" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Register Now
          </button>
        </a>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white text-center">Collaborators</h2>

      <div className="border rounded-lg shadow-sm bg-white p-3 sm:p-4 mb-6">
        <h2 className="text-lg sm:text-xl text-gray-700 font-semibold">Speakers From</h2>
        <img
          src="/images/symposium-collaborators/speaker-affiliations.png"
          alt="Speaker Affiliations"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="border rounded-lg shadow-sm bg-white p-3 sm:p-4 mb-6">
        <h2 className="text-lg sm:text-xl text-gray-700 font-semibold">Workshops From</h2>
        <img
          src="/images/symposium-collaborators/workshop-orgs.png"
          alt="Workshop Organizations"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="border rounded-lg shadow-sm bg-white p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl text-gray-700 font-semibold">Other Collaborating Student Organizations</h2>
        <img
          src="/images/symposium-collaborators/other-student-orgs.png"
          alt="Other Collaborating Student Organizations"
          className="w-full h-auto rounded-lg"
        />
      </div>



    </div>
  );
};

export default SymposiumSchedule;