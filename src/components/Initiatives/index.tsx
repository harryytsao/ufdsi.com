"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const initiatives = [
  {
    id: 1,
    title: "NVIDIA Deep Learning Workshop Series",
    shortTitle: "NVIDIA Workshop",
    description: "In partnership with UF Information Technology (UFIT), DSI organized a month-long, hands-on NVIDIA Deep Learning certification series with over 400 students registered and 350 actively participating.",
    image: "/images/initiatives/nvidia-workshop.jpg",
    stats: [
      { value: "400+", label: "Registrations" },
      { value: "350", label: "Participants" },
      { value: "4", label: "Weeks" }
    ],
    link: "/workshops"
  },
  {
    id: 2,
    title: "ShellHacks Participation",
    shortTitle: "ShellHacks",
    description: "With the help of UF CISE, DSI coordinated for 54 UF students to attend ShellHacks, Florida's largest hackathon, handling all logistics, transportation, and event coordination.",
    image: "/images/initiatives/shellhacks.jpg", 
    stats: [
      { value: "54", label: "UF Students" },
      { value: "3", label: "Days" },
      { value: "Multiple", label: "Awards Won" }
    ],
    link: "/workshops"
  },
  {
    id: 3,
    title: "DSI Spring Symposium",
    shortTitle: "Symposium",
    description: "Every year, DSI hosts its Spring Research Symposium, featuring 18 expert speakers from academia, industry, and government, and 6 hands-on workshops on cutting-edge topics.",
    image: "/images/initiatives/symposium.jpg",
    stats: [
      { value: "300+", label: "Attendees" },
      { value: "18", label: "Speakers" },
      { value: "6", label: "Workshops" }
    ],
    link: "/symposium"
  }
];

export default function Initiatives() {
  const [activeInitiative, setActiveInitiative] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Our Flagship Initiatives
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
            DSI organizes several high-impact initiatives throughout the year to provide students with hands-on experience, networking opportunities, and exposure to cutting-edge topics.
          </p>
        </div>

        <div className="relative">
          {/* Mobile tabs */}
          <div className="md:hidden flex overflow-x-auto space-x-2 mb-6 pb-2 no-scrollbar">
            {initiatives.map((initiative, index) => (
              <button
                key={initiative.id}
                onClick={() => setActiveInitiative(index)}
                className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-200 ${
                  activeInitiative === index
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {initiative.shortTitle}
              </button>
            ))}
          </div>

          {/* Desktop and mobile content */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image - top on mobile, right on desktop */}
            <div className="order-1 md:order-2 mb-5 md:mb-0">
              <motion.div
                key={`image-${activeInitiative}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-56 xs:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={initiatives[activeInitiative].image}
                  alt={initiatives[activeInitiative].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {initiatives[activeInitiative].title}
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* Content for active initiative */}
            <div className="order-2 md:order-1">
              {/* Desktop tabs */}
              <div className="hidden md:flex flex-col space-y-3 md:space-y-4 mb-6">
                {initiatives.map((initiative, index) => (
                  <button
                    key={initiative.id}
                    onClick={() => setActiveInitiative(index)}
                    className={`px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-left transition-all duration-200 border ${
                      activeInitiative === index
                        ? "border-teal-500 bg-white dark:bg-gray-800 shadow-md"
                        : "border-transparent bg-gray-100 dark:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div 
                        className={`w-1 h-10 sm:h-12 rounded-full mr-3 sm:mr-4 transition-colors duration-200 ${
                          activeInitiative === index ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-700"
                        }`} 
                      />
                      <div>
                        <h3 className={`font-bold text-base sm:text-lg mb-0.5 sm:mb-1 transition-colors duration-200 ${
                          activeInitiative === index ? "text-teal-600 dark:text-teal-400" : "text-gray-700 dark:text-gray-300"
                        }`}>
                          {initiative.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                          {initiative.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <motion.div
                key={activeInitiative}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 md:hidden">
                  {initiatives[activeInitiative].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                  {initiatives[activeInitiative].description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4 sm:mb-6">
                  {initiatives[activeInitiative].stats.map((stat, index) => (
                    <div key={index} className="text-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-lg sm:text-xl font-bold text-teal-600 dark:text-teal-400">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link 
                  href={initiatives[activeInitiative].link}
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 