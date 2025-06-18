'use client';
import { Metadata } from "next";
import Team from "@/components/Team";
import ScrollUp from "@/components/Common/ScrollUp";
import { useState } from "react";
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Define alumni data structure
interface AlumniMember {
  name: string;
  position: string;
  linkedin?: string;
  image?: string;
  year: string;
}

interface ExecBoard {
  year: string;
  displayName: string;
  members: AlumniMember[];
}

const execBoards: ExecBoard[] = [
  {
    year: "2015-2016",
    displayName: "2015-2016 Founding Board",
    members: [
      {
        name: "Damiem Chamness",
        position: "President/Founder (Fall)",
        linkedin: "https://www.linkedin.com/in/damiem/",
        image: "/images/alumni/2015-2016/damiem_chamness.jpg",
        year: "2015-2016"
      },
      {
        name: "Jack Kendall",
        position: "President (Spring)",
        linkedin: "https://www.linkedin.com/in/jack-kendall-2107287/",
        image: "/images/alumni/2015-2016/jack_kendall.jpg",
        year: "2015-2016"
      },
      {
        name: "Nicolas Hureira",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/nhureira/",
        image: "/images/alumni/2015-2016/nicolas_hureira.jpg",
        year: "2015-2016"
      },
      {
        name: "Gavin O'Leary",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/gavin-o-leary-a5788131/",
        image: "/images/alumni/2015-2016/gavin_oleary.jpg",
        year: "2015-2016"
      },
      {
        name: "Talia Brown",
        position: "Treasurer",
        image: "/images/alumni/2015-2016/talia_brown.jpg",
        year: "2015-2016"
      },
      {
        name: "Ya Zhang",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/yazhang1/",
        image: "/images/alumni/2015-2016/ya_zhang.jpg",
        year: "2015-2016"
      }
    ]
  },
  {
    year: "2016-2017",
    displayName: "2016-2017 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2016-2017"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2016-2017"
      }
      // Add more members as needed
    ]
  },
  {
    year: "2017-2018",
    displayName: "2017-2018 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2017-2018"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2017-2018"
      }
      // Add more members as needed
    ]
  },
  {
    year: "2018-2019",
    displayName: "2018-2019 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2018-2019"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2018-2019"
      }
      // Add more members as needed
    ]
  },
  {
    year: "2019-2020",
    displayName: "2019-2020 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2019-2020"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2019-2020"
      }
      // Add more members as needed
    ]
  },
  {
    year: "2020-2021",
    displayName: "2020-2021 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2020-2021"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2020-2021"
      }
      // Add more members as needed
    ]
  },
  {
    year: "2021-2022",
    displayName: "2021-2022 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      }
      // Add more members as needed
    ]
  },
  {
    year: "2022-2023",
    displayName: "2022-2023 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2022-2023"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2022-2023"
      }
      // Add more members as needed
    ]
  },
  {
    year: "2023-2024",
    displayName: "2023-2024 Executive Board",
    members: [
      {
        name: "Executive Member 1",
        position: "President",
        image: "/images/alumni/placeholder.jpg",
        year: "2023-2024"
      },
      {
        name: "Executive Member 2",
        position: "Vice President",
        image: "/images/alumni/placeholder.jpg",
        year: "2023-2024"
      }
      // Add more members as needed
    ]
  }
];

const TeamPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <section
        id="team"
        className="relative z-10 overflow-hidden bg-white pt-[120px] dark:bg-gray-dark"
      >
        <div className="container mx-auto">
          <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
            <Team />
          </div>
        </div>
      </section>
      {/* Alumni Section */}
      <section className="pt-[80px] pb-[120px]">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Alumni
            </h2>
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
                <Tab.List className="flex overflow-x-auto space-x-1 p-1 scrollbar-hide">
                  {execBoards.map((board) => (
                    <Tab
                      key={board.year}
                      className={({ selected }) =>
                        classNames(
                          'py-3 px-4 text-sm font-medium whitespace-nowrap flex-shrink-0',
                          'focus:outline-none',
                          selected
                            ? 'text-teal-600 border-b-2 border-teal-500 dark:text-teal-400 dark:border-teal-400'
                            : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
                        )
                      }
                    >
                      {board.year}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="mt-2">
                {execBoards.map((board, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'rounded-xl',
                      'focus:outline-none'
                    )}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        {board.displayName}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {board.members.map((member, index) => (
                          <div key={index} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all hover:shadow-lg overflow-hidden">
                            <div className="relative h-52 w-full bg-gradient-to-r from-teal-500 to-blue-500">
                              {member.image && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-full">
                                    <img
                                      src={member.image}
                                      alt={member.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="px-6 py-5">
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {member.name}
                              </h4>
                              <div className="flex items-center space-x-2 mb-3">
                                <span className="inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm font-medium text-teal-800 dark:text-teal-300">
                                  {member.position}
                                </span>
                              </div>
                              <div className="mt-4 flex items-center space-x-3">
                                {member.linkedin && (
                                  <a 
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm"
                                  >
                                    <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                    LinkedIn
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
      <ScrollUp />
    </>
  );
};

export default TeamPage;
