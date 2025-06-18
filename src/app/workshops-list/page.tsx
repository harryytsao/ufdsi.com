"use client";
import { useState } from "react";
import Link from "next/link";
import { Tab } from '@headlessui/react';
import { Metadata } from "next";
import Image from "next/image";
import ScrollUp from "@/components/Common/ScrollUp";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Sample workshop data - You can replace this with actual data from your API/DB
const upcomingWorkshops = [
  {
    id: 1,
    title: "Python for DS",
    date: "7th July 2025, 6-7pm",
    location: "AIIRI",
    description: "A hands-on introduction to Python for Data Science.",
    image: "/images/workshops/genomics.jpg",
    url: "#"
  },
  {
    id: 2,
    title: "Python for NLP",
    date: "28th July 2025, 6-7pm",
    location: "AIIRI",
    description: "Learn the basics of Natural Language Processing with Python.",
    image: "/images/workshops/machine-learning.jpg",
    url: "#"
  }
];

const pastWorkshops = [];

export default function WorkshopsPage() {
  const [categories] = useState({
    "Upcoming Workshops": upcomingWorkshops,
    "Past Workshops": pastWorkshops,
  });

  return (
    <>
      <section
        id="workshops"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-[800px] text-center mb-12">
            <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Workshops & Training
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 px-4">
              Expand your skills with our specialized workshops in data science, machine learning, 
              and related fields. Browse our upcoming and past workshops below.
            </p>
          </div>

          <div className="mx-auto w-full max-w-6xl px-4">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800 mb-8">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-3 text-lg font-medium leading-5',
                        'ring-white/60 ring-offset-2 ring-offset-teal-400 focus:outline-none',
                        selected
                          ? 'bg-white text-teal-600 shadow dark:bg-gray-700 dark:text-teal-400'
                          : 'text-gray-600 hover:bg-white/[0.12] hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {/* Upcoming Workshops Panel */}
                <Tab.Panel
                  className={classNames(
                    'rounded-xl p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none'
                  )}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {upcomingWorkshops.map((workshop) => (
                      <div 
                        key={workshop.id} 
                        className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700"
                      >
                        <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                          <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            {workshop.location}
                          </div>
                          {workshop.image && (
                            <div className="h-full w-full relative">
                              <Image 
                                src={workshop.image} 
                                alt={workshop.title}
                                fill
                                className="transition-all duration-300 hover:scale-105"
                                style={{ filter: "grayscale(50%)", objectFit: "cover" }}
                              />
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="mb-2 flex items-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-teal-500 dark:text-teal-400">
                              {workshop.date}
                            </span>
                          </div>
                          <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            {workshop.title}
                          </h3>
                          <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
                            {workshop.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>

                {/* Past Workshops Panel */}
                <Tab.Panel
                  className={classNames(
                    'rounded-xl p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none'
                  )}
                >
                  <div className="flex flex-col items-center justify-center min-h-[200px]">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Will be uploaded soon.</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      For Jupyter notebook archives go to{' '}
                      <a href="https://github.com/matheusmaldaner/WorkshopArchive" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">this repository</a>.
                    </p>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-[600px] rounded-lg bg-gray-50 p-8 shadow-lg dark:bg-gray-800">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-teal-500 px-6 py-3 text-center text-base font-medium text-white transition-colors duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ScrollUp />
    </>
  );
} 