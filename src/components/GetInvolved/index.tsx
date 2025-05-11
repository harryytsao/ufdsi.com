"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const involvementOptions = [
  {
    id: 1,
    title: "Join Our Discord",
    description: "Connect with our vibrant community of 1,100+ members, get announcements, and chat with fellow data enthusiasts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-10 h-10 sm:w-12 sm:h-12 fill-current text-indigo-500">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    ),
    link: "https://discord.gg/dsi",
    color: "bg-indigo-50 dark:bg-indigo-900/20",
    buttonColor: "bg-indigo-500 hover:bg-indigo-600",
    buttonText: "Join Discord"
  },
  {
    id: 2,
    title: "Follow Us on Instagram",
    description: "Stay updated with our latest events, see event recaps, and connect with our 1,500+ followers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 fill-current text-pink-500">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    link: "https://instagram.com/dsiuf",
    color: "bg-pink-50 dark:bg-pink-900/20",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
    buttonText: "Follow Us"
  },
  {
    id: 3,
    title: "Attend Our Events",
    description: "From workshops to networking events to our annual symposium, there's always something happening at DSI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 sm:w-12 sm:h-12 text-teal-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    link: "/workshops",
    color: "bg-teal-50 dark:bg-teal-900/20",
    buttonColor: "bg-teal-500 hover:bg-teal-600",
    buttonText: "See Calendar"
  },
  {
    id: 4,
    title: "Join the Team",
    description: "Apply to join our Executive Board and help shape the future of DSI while gaining valuable leadership experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    link: "/team",
    color: "bg-orange-50 dark:bg-orange-900/20",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    buttonText: "Learn More"
  }
];

export default function GetInvolved() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Get Involved with DSI
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
            Ready to join Florida's largest data science student organization? Here's how you can get involved and become part of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {involvementOptions.map((option) => (
            <div 
              key={option.id}
              className={`rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-lg ${option.color}`}
            >
              <div className="mb-3 sm:mb-4">
                {option.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900 dark:text-white">
                {option.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                {option.description}
              </p>
              <Link
                href={option.link}
                className={`inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg text-white text-sm sm:text-base ${option.buttonColor} transition-colors duration-200`}
              >
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
              Join Us in Shaping the Future
            </h3>
            <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
              Whether you're just starting to explore data science or already experienced, there's a place for you at DSI. Our community welcomes students from all majors and backgrounds.
            </p>
            <Link
              href="mailto:dsiufl@gmail.com"
              className="inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-teal-600 font-medium sm:font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 