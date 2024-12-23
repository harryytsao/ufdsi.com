import React from 'react';

const SymposiumSchedule = () => {
  const schedule = [
    { start: "9:00", end: "9:30", event: "Breakfast Networking", color: "bg-rose-50" },
    { start: "9:30", end: "10:00", event: "Keynote Speaker 1", color: "bg-amber-50" },
    { start: "10:00", end: "10:40", event: "Workshop 1 (Companies)", color: "bg-blue-50" },
    { start: "10:45", end: "11:25", event: "Workshop 2 (Research)", color: "bg-blue-50" },
    { start: "11:30", end: "12:15", event: "UF Clubs Competition", color: "bg-emerald-50" },
    { start: "12:15", end: "1:00", event: "Lunch", color: "bg-slate-50" },
    { start: "1:00", end: "1:30", event: "Poster Presentation", color: "bg-slate-50" },
    { start: "1:30", end: "2:00", event: "Keynote Speaker 2", color: "bg-amber-50" },
    { start: "2:05", end: "2:45", event: "Workshop 3 (Research)", color: "bg-blue-50" },
    { start: "2:50", end: "3:30", event: "Workshop 4 (Companies)", color: "bg-blue-50" }
  ];

  return (

    <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">DSI Spring Symposium 2025</h1>
        <p className="text-xl mb-8">Join us for a day of learning, networking, and innovation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold mb-4">About the Symposium</h2>
          <p className="text-gray-700 mb-4">
            The Data Science and Informatics (DSI) club at the University of Florida proudly presents our Spring Symposium. 
            This dynamic event brings together students, faculty, and industry professionals for a day of knowledge sharing 
            and networking in the field of data science.
          </p>
          <p className="text-gray-700 mb-4">
            The symposium features an impressive lineup of 18 speakers and 6 interactive workshops spread across multiple tracks.
          </p>
          <p className="text-gray-700">
            Sessions will be held in five distinct locations within the Reitz Union, including the main Auditorium 
            for opening and closing ceremonies, and four medium-sized rooms dedicated to specific tracks.
          </p>
        </div>

        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <div className="space-y-4 text-gray-700">
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

      <div className="border rounded-lg shadow-sm bg-white mb-12">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Event Schedule</h2>
          <div className="space-y-2">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className={`${item.color} border border-gray-100 p-4 rounded-lg flex justify-between items-center transition-colors duration-200 hover:bg-opacity-70`}
              >
                <span className="font-medium text-gray-700 w-32">
                  {item.start} - {item.end}
                </span>
                <span className="flex-1 font-medium text-gray-800">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <p className="text-gray-700 mb-6">
        Register now to secure your spot at the symposium.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default SymposiumSchedule;