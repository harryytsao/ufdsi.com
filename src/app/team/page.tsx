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
        image: "/images/people/2015-2016/2015_DamienChamness_PresidentSpring.jpg",
        year: "2015-2016"
      },
      {
        name: "Jack Kendall",
        position: "President (Spring)",
        linkedin: "https://www.linkedin.com/in/jack-kendall-2107287/",
        image: "/images/people/2015-2016/2015_JackKendall_PresidentFall.jpg",
        year: "2015-2016"
      },
      {
        name: "Nicolas Hureira",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/nhureira/",
        image: "/images/people/2015-2016/2015_NicolasHureira_VicePresidentExternal.jpg",
        year: "2015-2016"
      },
      {
        name: "Gavin O'Leary",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/gavin-o-leary-a5788131/",
        image: "/images/alumni/placeholder.jpg",
        year: "2015-2016"
      },
      {
        name: "Talia Brown",
        position: "Treasurer",
        image: "/images/alumni/placeholder.jpg",
        year: "2015-2016"
      },
      {
        name: "Ya Zhang",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/yazhang1/",
        image: "/images/people/2015-2016/2015_YaZhang_Secretary.jpg",
        year: "2015-2016"
      }
    ]
  },
  {
    year: "2016-2017",
    displayName: "2016-2017 Executive Board",
    members: [
      {
        name: "Gordon Wilson",
        position: "President",
        linkedin: "https://www.linkedin.com/in/gordonhirschwilson/",
        image: "/images/people/2016-2017/2016_GordonWilson_PresidentSpring.jpg",
        year: "2016-2017"
      },
      {
        name: "Ya Zhang",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/yazhang1/",
        image: "/images/people/2016-2017/2016_YaZhang_VicePresidentExternalSpring.jpg",
        year: "2016-2017"
      },
      {
        name: "Kyle Smyre",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/kyle-smyre-4836776b/",
        image: "/images/people/2016-2017/2016_KyleSmyre_VicePresidentInternalSpring.jpg",
        year: "2016-2017"
      },
      {
        name: "Ryan Sheppard",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/ryan-sheppard/",
        image: "/images/people/2016-2017/2016_RyanSheppard_TreasurerSpring.jpg",
        year: "2016-2017"
      },
      {
        name: "Marc Nebb",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/marc-nebb-8a5460159/",
        image: "/images/people/2016-2017/2016_MarcNebb_SecretarySpring.jpg",
        year: "2016-2017"
      }
    ]
  },
  {
    year: "2017-2018",
    displayName: "2017-2018 Executive Board",
    members: [
      {
        name: "Bobbie Isaly",
        position: "President",
        linkedin: "https://www.linkedin.com/in/bobbie-isaly/",
        image: "/images/people/2017-2018/2017_BobbieIsaly_PresidentSpring.jpg",
        year: "2017-2018"
      },
      {
        name: "Steven Remington",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/remingtonstevenr/",
        image: "/images/people/2017-2018/2017_StevenRemington_VicePresidentExternalSpring.jpg",
        year: "2017-2018"
      },
      {
        name: "Anthony Codella",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/anthony-codella/",
        image: "/images/people/2017-2018/2017_AnthonyCodella_VicePresidentInternalSpring.jpg",
        year: "2017-2018"
      },
      {
        name: "Kanis Bootsita",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/kanisbootsita/",
        image: "/images/people/2017-2018/2017_KanisBootsita_TreasurerSpring.jpg",
        year: "2017-2018"
      },
      {
        name: "Charlotte Talham",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/charlotte-talham-55496320a/",
        image: "/images/people/2017-2018/2017_CharlotteTalham_SecretarySpring.jpg",
        year: "2017-2018"
      }
    ]
  },
  {
    year: "2018-2019",
    displayName: "2018-2019 Executive Board",
    members: [
      {
        name: "Tyler Richards",
        position: "President",
        linkedin: "https://www.linkedin.com/in/tylerjrichards/",
        image: "/images/people/2018-2019/2018_TylerRichards_PresidentSpring.jpg",
        year: "2018-2019"
      },
      {
        name: "Ross Spencer",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/ross-spencer/",
        image: "/images/people/2018-2019/2018_RossSpencer_VicePresidentExternalSpring.jpg",
        year: "2018-2019"
      },
      {
        name: "Allison Kahn",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/allison-kahn/",
        image: "/images/people/2018-2019/2018_AllisonKahn_VicePresidentInternalSpring.jpg",
        year: "2018-2019"
      },
      {
        name: "Matthew Silversmith",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/msilversmith/",
        image: "/images/people/2018-2019/2018_MatthewSilversmith_TreasurerSpring.jpg",
        year: "2018-2019"
      },
      {
        name: "Vinay Reddy",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/vinayreddy/",
        image: "/images/people/2018-2019/2018_VinayReddy_SecretarySpring.jpg",
        year: "2018-2019"
      },
      {
        name: "Delaney Gomen",
        position: "Workshop Director",
        linkedin: "https://www.linkedin.com/in/delaneygomen/",
        image: "/images/people/2018-2019/2018_DelaneyGomen_WorkshopDirectorSpring.jpg",
        year: "2018-2019"
      }
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
        name: "Justin Friedland",
        position: "President",
        linkedin: "https://www.linkedin.com/in/justinfriedland/",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      },
      {
        name: "Kendall Willis",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/kendall-willis-9929b5192/",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      },
      {
        name: "Evan Smyser",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/evan-smyser/",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      },
      {
        name: "Jiahe Yao",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/jiahe-yao-773014226/",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      },
      {
        name: "Bella Ruiz",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/ruizbella/",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      },
      {
        name: "Ezzard Bradford",
        position: "Workshop Director",
        linkedin: "https://www.linkedin.com/in/ezzard-bradford/",
        image: "/images/alumni/placeholder.jpg",
        year: "2021-2022"
      }
    ]
  },
  {
    year: "2022-2023",
    displayName: "2022-2023 Executive Board",
    members: [
      {
        name: "Allan Zhang",
        position: "President",
        linkedin: "https://www.linkedin.com/in/allan-zhang-03/",
        image: "/images/people/2022-2023/2022_AllanZhang_PresidentSpring.jpg",
        year: "2022-2023"
      },
      {
        name: "Justin Witter",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/justin-witter/",
        image: "/images/people/2022-2023/2022_JustinWitter_VicePresidentExternalSpring.jpg",
        year: "2022-2023"
      },
      {
        name: "Eric Chao",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/elchao/",
        image: "/images/people/2022-2023/2022_EricChao_VicePresidentInternalSpring.jpg",
        year: "2022-2023"
      },
      {
        name: "Vincent Medina",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/vmedina13/",
        image: "/images/people/2022-2023/2022_VincentMedina_TreasurerSpring.jpg",
        year: "2022-2023"
      },
      {
        name: "Lauren Zhu",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/lauren-zhu/",
        image: "/images/people/2022-2023/2022_LaurenZhu_SecretarySpring.jpg",
        year: "2022-2023"
      },
      {
        name: "Matthew Peck",
        position: "Workshop Director",
        linkedin: "https://www.linkedin.com/in/peckmatthew6/",
        image: "/images/people/2022-2023/2022_MatthewPeck_WorkshopDirectorSpring.jpg",
        year: "2022-2023"
      }
    ]
  },
  {
    year: "2023-2024",
    displayName: "2023-2024 Executive Board",
    members: [
      {
        name: "Eric Chao",
        position: "President",
        linkedin: "https://www.linkedin.com/in/elchao/",
        image: "/images/people/2023-2024/2023_EricChao_PresidentSpring.jpg",
        year: "2023-2024"
      },
      {
        name: "Alisha Jithesh",
        position: "Vice President External",
        linkedin: "https://www.linkedin.com/in/ajithesh7/",
        image: "/images/people/2023-2024/2023_AlishaJithesh_VicePresidentExternalSpring.jpg",
        year: "2023-2024"
      },
      {
        name: "Camila Djurinsky Zapolski",
        position: "Vice President Internal",
        linkedin: "https://www.linkedin.com/in/camila-djurinsky-zapolski-20451a236/",
        image: "/images/people/2023-2024/2023_CamilaDjurinskyZapolski_VicePresidentInternalSpring.jpg",
        year: "2023-2024"
      },
      {
        name: "Hannah Hardy",
        position: "Treasurer",
        linkedin: "https://www.linkedin.com/in/hannah-hardy-uf/",
        image: "/images/people/2023-2024/2023_HannahHardy_TreasurerSpring.jpg",
        year: "2023-2024"
      },
      {
        name: "Harry Tsao",
        position: "Secretary",
        linkedin: "https://www.linkedin.com/in/harrytsao/",
        image: "/images/people/2023-2024/2023_HarryTsao_SecretarySpring.jpg",
        year: "2023-2024"
      },
      {
        name: "Matheus Kunzler Maldaner",
        position: "Workshop Director",
        linkedin: "https://www.linkedin.com/in/matheusmaldaner/",
        image: "/images/people/2023-2024/2023_MatheusKunzlerMaldaner_WorkshopDirectorSpring.jpg",
        year: "2023-2024"
      }
    ]
  }
];

// Create an array of tab options including "Current Board" and all exec board years in descending order
const tabOptions = [
  { name: "Current Board", id: "current" },
  ...execBoards.slice().reverse().map(board => ({ name: board.year, id: board.year }))
];

const TeamPage = () => {
  // Default to the "Current Board" tab (index 0)
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to get the correct board index when using reversed array
  const getBoardIndex = (selectedIndex) => {
    if (selectedIndex === 0) return 0; // Current board
    const reversedIndex = selectedIndex - 1;
    return execBoards.length - 1 - reversedIndex;
  };

  return (
    <>
      <section
        id="team"
        className="relative z-10 overflow-hidden bg-white pt-[120px] pb-[80px] dark:bg-gray-dark"
      >
        <div className="container mx-auto">
          {/* Enhanced header with decorative elements */}
          <div className="mb-16 text-center relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-6 w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
           
            
          </div>

          {/* Improved board selection with cards */}
          <div className="mx-auto w-full max-w-3xl mb-16">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 inline-flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                Select Board
              </h3>
              
              <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <select
                  id="board-select"
                  value={selectedIndex}
                  onChange={(e) => setSelectedIndex(parseInt(e.target.value))}
                  className="block w-full rounded-lg border-0 py-4 pl-5 pr-10 text-base focus:ring-2 focus:ring-teal-500 focus:outline-none dark:bg-gray-800 dark:text-white appearance-none bg-transparent"
                  style={{ backgroundImage: 'none' }}
                >
                  {tabOptions.map((option, index) => (
                    <option key={option.id} value={index} className="py-2">
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-teal-600 dark:text-teal-400">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Display selected board */}
          <div>
            {selectedIndex === 0 ? (
              // Current Board
              <Team />
            ) : (
              // Historical Board
              <div className="mb-8">
                <div className="text-center mb-12">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 inline-block relative">
                    {execBoards[getBoardIndex(selectedIndex)].displayName}
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
                  </h3>
                  <div className="w-16 h-1 bg-teal-500 mx-auto mb-6 rounded-full hidden"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                  {execBoards[getBoardIndex(selectedIndex)].members.map((member, index) => (
                    <div key={index} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all hover:shadow-lg overflow-hidden w-full max-w-[280px] hover:translate-y-[-5px] duration-300">
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
            )}
          </div>
        </div>
      </section>
      <ScrollUp />
    </>
  );
};

export default TeamPage;
