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
    title: "WEBSITE IN PROGRESS",
    institution: "WEBSITE IN PROGRESS",
    date: "WEBSITE IN PROGRESS",
    instructors: ["WEBSITE IN PROGRESS"],
    location: "WEBSITE IN PROGRESS",
    description: "WEBSITE IN PROGRESS",
    tags: ["website-in-progress"],
    image: "/images/workshops/genomics.jpg",
    url: "/workshops/genomics-2023"
  },
  {
    id: 2,
    title: "WEBSITE IN PROGRESS",
    institution: "WEBSITE IN PROGRESS",
    date: "WEBSITE IN PROGRESS",
    instructors: ["WEBSITE IN PROGRESS"],
    location: "WEBSITE IN PROGRESS",
    description: "WEBSITE IN PROGRESS",
    tags: ["website-in-progress"],
    image: "/images/workshops/machine-learning.jpg",
    url: "/workshops/ml-python-2023"
  },
  {
    id: 3,
    title: "WEBSITE IN PROGRESS",
    institution: "WEBSITE IN PROGRESS",
    date: "WEBSITE IN PROGRESS",
    instructors: ["WEBSITE IN PROGRESS"],
    location: "WEBSITE IN PROGRESS",
    description: "WEBSITE IN PROGRESS",
    tags: ["website-in-progress"],
    image: "/images/workshops/data-viz.jpg",
    url: "/workshops/data-viz-r-2023"
  },
];

const pastWorkshops = [
  {
    id: 1,
    title: "WEBSITE IN PROGRESS",
    institution: "WEBSITE IN PROGRESS",
    date: "WEBSITE IN PROGRESS",
    instructors: ["WEBSITE IN PROGRESS"],
    location: "WEBSITE IN PROGRESS",
    description: "WEBSITE IN PROGRESS",
    tags: ["website-in-progress"],
    image: "/images/workshops/python-intro.jpg",
    url: "/workshops/python-ds-2023",
    materials: "https://github.com/ufdsi/python-workshops"
  },
  {
    id: 2,
    title: "WEBSITE IN PROGRESS",
    institution: "WEBSITE IN PROGRESS",
    date: "WEBSITE IN PROGRESS",
    instructors: ["WEBSITE IN PROGRESS"],
    location: "WEBSITE IN PROGRESS",
    description: "WEBSITE IN PROGRESS",
    tags: ["website-in-progress"],
    image: "/images/workshops/deep-learning.jpg",
    url: "/workshops/deep-learning-2023",
    materials: "https://github.com/ufdsi/deep-learning-workshops"
  },
  {
    id: 3,
    title: "WEBSITE IN PROGRESS",
    institution: "WEBSITE IN PROGRESS",
    date: "WEBSITE IN PROGRESS",
    instructors: ["WEBSITE IN PROGRESS"],
    location: "WEBSITE IN PROGRESS",
    description: "WEBSITE IN PROGRESS",
    tags: ["website-in-progress"],
    image: "/images/workshops/r-stats.jpg",
    url: "/workshops/r-stats-2023",
    materials: "https://github.com/ufdsi/r-stats-workshops"
  },
  {
    id: 4,
    title: "WEBSITE IN PROGRESS",
    institution: "WEBSITE IN PROGRESS",
    date: "WEBSITE IN PROGRESS",
    instructors: ["WEBSITE IN PROGRESS"],
    location: "WEBSITE IN PROGRESS",
    description: "WEBSITE IN PROGRESS",
    tags: ["website-in-progress"],
    image: "/images/workshops/nlp.jpg",
    url: "/workshops/nlp-2023",
    materials: "https://github.com/ufdsi/nlp-workshops"
  },
];

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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingWorkshops.map((workshop) => (
                      <div 
                        key={workshop.id} 
                        className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700"
                      >
                        <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                          <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            {workshop.location}
                          </div>
                          {workshop.image ? (
                            <div className="h-full w-full relative">
                              <Image 
                                src={workshop.image} 
                                alt={workshop.title}
                                fill
                                className="transition-all duration-300 hover:scale-105"
                                style={{ filter: "grayscale(50%)", objectFit: "cover" }}
                              />
                            </div>
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500">
                              <span className="text-2xl font-bold text-white">{workshop.title.substring(0, 2)}</span>
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
                          <div className="mb-4">
                            <p className="text-sm text-gray-700 dark:text-gray-400">
                              <span className="font-medium">Instructors:</span> {workshop.instructors.join(", ")}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {workshop.tags.map((tag, index) => (
                              <span 
                                key={index} 
                                className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <Link 
                            href={workshop.url} 
                            className="inline-block w-full rounded-md bg-teal-500 px-4 py-2 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:hover:bg-teal-600"
                          >
                            View Details
                          </Link>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastWorkshops.map((workshop) => (
                      <div 
                        key={workshop.id} 
                        className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700"
                      >
                        <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                          <div className="absolute top-0 right-0 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg dark:bg-gray-600">
                            {workshop.location}
                          </div>
                          {workshop.image ? (
                            <div className="h-full w-full relative">
                              <Image 
                                src={workshop.image} 
                                alt={workshop.title}
                                fill
                                className="transition-all duration-300 hover:scale-105"
                                style={{ filter: "grayscale(50%)", objectFit: "cover" }}
                              />
                            </div>
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-gray-500 to-gray-700">
                              <span className="text-2xl font-bold text-white">{workshop.title.substring(0, 2)}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="mb-2 flex items-center">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                              {workshop.date}
                            </span>
                          </div>
                          <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            {workshop.title}
                          </h3>
                          <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
                            {workshop.description}
                          </p>
                          <div className="mb-4">
                            <p className="text-sm text-gray-700 dark:text-gray-400">
                              <span className="font-medium">Instructors:</span> {workshop.instructors.join(", ")}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {workshop.tags.map((tag, index) => (
                              <span 
                                key={index} 
                                className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Link 
                              href={workshop.url} 
                              className="inline-block flex-1 rounded-md bg-gray-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:hover:bg-gray-700"
                            >
                              Workshop Details
                            </Link>
                            {workshop.materials && (
                              <a 
                                href={workshop.materials}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Materials
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-[600px] rounded-lg bg-gray-50 p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">WEBSITE IN PROGRESS</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                WEBSITE IN PROGRESS
              </p>
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