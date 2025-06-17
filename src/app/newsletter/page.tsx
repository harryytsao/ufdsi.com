'use client';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

const articles = [
  {
    title: 'DSI wins student organization of the year',
    image: '/images/newsletter/org-of-year.jpg', // placeholder path
  },
  {
    title: "DSI member's chatbot SAMSARA wins AI hackathon",
    image: '/images/newsletter/samsara-hackathon.jpg', // placeholder path
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">DSI Newsletter</h1>
      <div className="w-full max-w-2xl">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800 mb-8 overflow-x-auto scrollbar-hide">
            {articles.map((article, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  classNames(
                    'flex flex-col items-center w-64 min-w-[16rem] rounded-lg py-3 px-2 font-medium text-lg transition-all duration-200 focus:outline-none',
                    'ring-white/60 ring-offset-2 ring-offset-teal-400',
                    selected
                      ? 'bg-white text-teal-600 shadow dark:bg-gray-700 dark:text-teal-400'
                      : 'text-gray-600 hover:bg-white/[0.12] hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 bg-white dark:bg-gray-800'
                  )
                }
              >
                <div className="relative w-full h-32 mb-2 rounded-md overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <span className="text-center px-2">{article.title}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {articles.map((_, idx) => (
              <Tab.Panel key={idx} className="rounded-xl bg-white dark:bg-gray-800 p-8 text-center text-xl text-gray-700 dark:text-gray-200 shadow">
                Article coming soon!
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
} 