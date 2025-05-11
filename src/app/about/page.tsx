"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const tabs = [
  { id: "mission", label: "Mission & Vision" },
  { id: "history", label: "Our History" },
  { id: "impact", label: "Impact" },
  { id: "future", label: "Future Plans" }
];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <>
      <section className="pt-24 sm:pt-32 md:pt-[150px] pb-12 sm:pb-16 md:pb-[120px]">
        <div className="container px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="border-b border-gray-200 pb-8 sm:pb-12 md:pb-16 lg:pb-28 dark:border-gray-700"
          >
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-8 md:mb-12 lg:mb-0 max-w-[540px]">
                  <h2 className="mb-4 text-2xl sm:text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                    About Data Science & Informatics
                  </h2>
                  <p className="mb-4 sm:mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    The UF Data Science and Informatics (DSI) student organization is the largest data science community at the University of Florida and in the state, with over 1,500 members spanning all academic levels and disciplines.
                  </p>
                  <p className="mb-4 sm:mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Since our founding in 2015, we've grown from a small group of enthusiastic undergraduates to a powerhouse organization that hosts Florida's largest data science symposium, leads students to victory in competitions, and collaborates with industry giants like NVIDIA, Google, and Microsoft.
                  </p>
                  <p className="mb-6 sm:mb-8 md:mb-10 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Our community includes students from every college at UF, representing the interdisciplinary nature of data science and its applications across all fields.
                  </p>

                  {/* Mobile view: Image */}
                  <div className="lg:hidden mb-6 sm:mb-8">
                    <div className="relative z-10">
                      <Image
                        src="/images/hero/landing-page.jpg"
                        alt="UF DSI Community"
                        width={600}
                        height={400}
                        className="mx-auto w-full rounded-md shadow-lg object-cover"
                      />
                      
                      {/* Stats overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6">
                        <div className="grid grid-cols-2 gap-4 text-white">
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold">1,500+</div>
                            <div className="text-xs sm:text-sm opacity-80">Members</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold">8+</div>
                            <div className="text-xs sm:text-sm opacity-80">Years</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab navigation - Scrollable on mobile */}
                  <div className="mb-6 sm:mb-8">
                    <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto no-scrollbar">
                      <nav className="flex flex-nowrap -mb-px">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 inline-block py-3 px-3 sm:px-4 text-sm font-medium text-center border-b-2 rounded-t-lg ${
                              activeTab === tab.id
                                ? "text-teal-600 border-teal-600 dark:text-teal-500 dark:border-teal-500"
                                : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Tab content */}
                  <div className="tab-content">
                    {activeTab === "mission" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Our Mission</h3>
                        <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          To democratize access to data science and artificial intelligence education, foster a diverse and inclusive community, and prepare the next generation of leaders in these rapidly evolving fields.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Our Vision</h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          We envision a future where every UF student has the opportunity to develop data literacy and computational thinking skills, regardless of their major or background. We aim to position UF as a national leader in undergraduate data science education and student-led innovation.
                        </p>
                      </motion.div>
                    )}

                    {activeTab === "history" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">From Humble Beginnings</h3>
                        <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          DSI was founded in 2015 by a small group of undergraduate students passionate about data science. Starting with just a handful of members and workshops, we've grown exponentially over the years.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          By 2025, we've transformed into the largest data science student organization in Florida, with over 1,500 members, 30+ executive board members, and a rich program of workshops, competitions, hackathons, and our annual symposium that attracts hundreds of participants.
                        </p>
                      </motion.div>
                    )}

                    {activeTab === "impact" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Educational Impact</h3>
                        <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          Our workshop series and hands-on training sessions have empowered thousands of students with practical skills in data science, AI, machine learning, and programming. Our partnership with UF Information Technology led to a successful NVIDIA Deep Learning certification series with over 400 registrations.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Competition Success</h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          DSI members consistently excel in competitions, winning multiple awards at events like UF DataFest, AI Days Hackathon, SwampHacks, USCLAP, and ShellHacks. These achievements showcase our members' ability to apply their knowledge to real-world challenges.
                        </p>
                      </motion.div>
                    )}

                    {activeTab === "future" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Expanding Our Reach</h3>
                        <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          We're working to expand our initiatives to reach more students across disciplines, with a focus on increasing diversity and inclusion in data science. Our goal is to create entry points for students from all backgrounds to engage with data science.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">Industry Connections</h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                          We're strengthening our industry partnerships to provide more internship opportunities, sponsored projects, and mentorship programs for our members. These connections will help bridge the gap between academic learning and industry application.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Desktop image - hidden on mobile */}
              <div className="hidden lg:block w-full px-4 lg:w-1/2">
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <Image
                      src="/images/hero/landing-page.jpg"
                      alt="UF DSI Community"
                      width={600}
                      height={400}
                      className="mx-auto max-w-full lg:ml-auto rounded-md shadow-lg object-cover"
                    />
                    
                    {/* Stats overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <div className="grid grid-cols-2 gap-4 text-white">
                        <div className="text-center">
                          <div className="text-3xl font-bold">1,500+</div>
                          <div className="text-sm opacity-80">Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">8+</div>
                          <div className="text-sm opacity-80">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional achievements cards */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md text-left">
                      <div className="text-teal-600 dark:text-teal-400 text-2xl font-bold mb-2">300+</div>
                      <div className="text-gray-900 dark:text-white font-bold">Symposium Attendees</div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Our annual Spring Research Symposium attracts hundreds of participants.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md text-left">
                      <div className="text-teal-600 dark:text-teal-400 text-2xl font-bold mb-2">30+</div>
                      <div className="text-gray-900 dark:text-white font-bold">Executive Members</div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Our diverse leadership team spans multiple colleges and disciplines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile stats cards */}
              <div className="lg:hidden px-4 w-full">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md text-left">
                    <div className="text-teal-600 dark:text-teal-400 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">300+</div>
                    <div className="text-gray-900 dark:text-white font-bold text-sm sm:text-base">Symposium Attendees</div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
                      Our annual Spring Research Symposium attracts hundreds of participants.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md text-left">
                    <div className="text-teal-600 dark:text-teal-400 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">30+</div>
                    <div className="text-gray-900 dark:text-white font-bold text-sm sm:text-base">Executive Members</div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
                      Our diverse leadership team spans multiple colleges and disciplines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 