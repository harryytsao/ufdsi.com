"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Awards data from the GRSO document
const awards = [
  {
    id: 1,
    title: "UF OSC MiniHack",
    year: "2024",
    achievement: "Best AI Hack and 2nd place overall"
  },
  {
    id: 2,
    title: "UF DataFest",
    year: "2024",
    achievement: "1st place overall"
  },
  {
    id: 3,
    title: "USCLAP",
    year: "2024", 
    achievement: "Second Place Overall at the National Undergraduate Statistics Conference"
  },
  {
    id: 4,
    title: "ShellHacks Hackathon",
    year: "2024",
    achievement: "Multiple company-sponsored awards"
  },
  {
    id: 5,
    title: "UF SwampHacks X Hackathon",
    year: "2025",
    achievement: "Best AI Hack"
  },
  {
    id: 6, 
    title: "UF AI Days Hackathon",
    year: "2025",
    achievement: "1st place, 2nd place and most popular awards"
  },
  {
    id: 7,
    title: "UF AI Days Generative AI Competition",
    year: "2025",
    achievement: "Second place overall"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Achievements() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Our Awards & Achievements
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
            DSI members consistently excel in competitions and hackathons, demonstrating their ability to apply knowledge to real-world challenges.
          </p>
        </div>

        {/* Mobile view: horizontal scrollable container */}
        <div className="md:hidden overflow-x-auto pb-6 no-scrollbar">
          <div className="flex space-x-4 px-2 min-w-min">
            {awards.slice(0, 4).map((award) => (
              <div 
                key={award.id}
                className="flex-shrink-0 w-[85vw] max-w-[320px] bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md border-t-4 border-teal-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-2">
                    {award.title}
                  </h3>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium px-2 py-0.5 rounded flex-shrink-0">
                    {award.year}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  {award.achievement}
                </p>
                <div>
                  <span className="inline-flex items-center text-teal-600 dark:text-teal-400 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Trophy Winner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid view */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {awards.map((award) => (
            <motion.div 
              key={award.id}
              variants={item}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-teal-500"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {award.title}
                </h3>
                <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  {award.year}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {award.achievement}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center text-teal-600 dark:text-teal-400">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Trophy Winner
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile pagination dots */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          <div className="w-2 h-2 rounded-full bg-teal-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 dark:text-gray-400 italic text-sm sm:text-base">
            Join DSI and be part of our winning legacy!
          </p>
        </div>
      </div>
    </section>
  );
} 