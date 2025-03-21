'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

interface EventDetail {
  title: string;
  description: string;
  room: string;
  track: string;
  time: string;
  speaker_img?: string;  // Optional speaker image URL
  speaker_sup?: string;  // Optional supplementary info
  speaker_sup_2?: string;  // Optional second supplementary info
}

const SymposiumSchedule = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { theme, setTheme } = useTheme();

  const eventDetails: Record<string, EventDetail> = {
    "Norman Bukingolts, Association of Computing Machinery": {
      title: "Transforming Our Humanity Into Job Security",
      description: "What happens when what we know isn't enough to be employable anymore? Amid rising layoffs in the tech industry and beyond due to the automation of labor with AI systems, stress about job security is thriving -- but hope for a meaningful, stable career is not yet lost. Attend this workshop to explore how analytical, generative, and agentic AI systems are being implemented in the modern workplace and understand their strengths and limitations. Learn about not just philosophical but technical arguments describing what exactly an AI system can and cannot provably do -- and why what makes us human is not only \"marketable\" but essential to the current and future workforce.",
      room: "Room 2365",
      track: "Workshop Track",
      time: "10:30 - 11:30",
      speaker_img: "/images/speakers/norman.png",
      speaker_sup: "/images/speakers/norman_sup.png"
    },
    "Dr. Hubert Wagner": {
      title: "Advanced Topological Data Analysis",
      description: "An exploration of the latest techniques in topological data analysis and their applications in machine learning.",
      room: "Room 2335",
      track: "Research Track",
      time: "10:30 - 11:30",
      // speaker_img: "/images/speakers/hubert.jpg",
      // speaker_sup: "Research Lead, Hugging Face"
    },
    "Raul Valle, IEEE Signal Processing Society": {
      title: "Introduction to Signal Processing",
      description: "Signals are how computers (and people) interpret the world. With the LLM hype calming down, we get a chance to revisit the mathematical roots of black-box machine learning in time-series problems, and learn how filters gave humanity access to computational foresight. Attend this workshop to attain mathematical insight into the complex world of signal processing from the perspective of its innovators, and learn what the future of AI beholds.",
      room: "Room 2365",
      track: "Workshop Track",
      time: "12:45 - 1:45",
      speaker_img: "/images/speakers/raul.png",
      speaker_sup: "/images/speakers/raul_sup.png"
    },
    "Jacques Fleischer, AI Club": {
      title: "Computer Vision and Data Annotation Workshop",
      description: "Learn how to properly configure a CV model using sophisticated annotation platforms and a live demo of YOLO training. Hands-on participation where the audience can help train a gator detector model.",
      room: "Room 2365",
      track: "Workshop Track",
      time: "3:15 - 4:15",
      speaker_img: "/images/speakers/jacques.png",
      speaker_sup: "/images/speakers/jacques_sup.png"
    },
    "Tony Barr, SAS Institute, AMOR": {
      title: "From SAS to A Model Of Reality",
      description: "Tony Barr will discuss the early history of the SAS system for data analytics and his current work, A Model Of Reality (AMOR). AMOR aims to create a world where young children and adults can understand and flourish in programming, databases, mathematics, and data analytics. AMOR uses diagrams and flowcharts to make reading and writing programs easy and intuitive for learners and seasoned users. The mission is to enable users to navigate through knowledge space naturally, as they navigate the real world.",
      room: "Room 2325",
      track: "General Track",
      time: "10:30 - 11:30",
      speaker_img: "/images/speakers/anthony.png",
      speaker_sup: "/images/speakers/anthony_sup.png",
      speaker_sup_2: "/images/speakers/anthony_sup2.png"
    },
    "Dr. Aapo Hyvarinen, University of Helsinki": {
      title: "Painful Intelligence: What AI Can Tell Us About Human Suffering",
      description: "This talk introduces my recent e-book with the same title, freely available on arxiv. The book uses the modern theory of artificial intelligence (AI) to understand human suffering or mental pain. Both humans and sophisticated AI agents process information about the world in order to achieve goals and obtain rewards, which is why AI can be used as a model of the human brain and mind. The book starts with the assumption that suffering is mainly caused by frustration. Frustration means the failure of an agent (whether AI or human) to achieve a goal or a reward it wanted or expected. Frustration is inevitable because of the overwhelming complexity of the world, limited computational resources, and scarcity of good data. In particular, such limitations imply that an agent acting in the real world must cope with uncontrollability, unpredictability, and uncertainty, which all lead to frustration. Such computational theory is finally used to derive various interventions or training methods that will reduce suffering in humans. The ensuing interventions are very similar to those proposed by Buddhist and Stoic philosophy, and include mindfulness meditation.",
      room: "Room 2335",
      track: "Research Track",
      time: "9:15 - 10:15",
      speaker_img: "/images/speakers/aapo.png",
      speaker_sup: "/images/speakers/aapo_sup.png"
    },
    "Dr. Megan Higgs": {
      title: "Pausing to Take a Deeper Look at Assumptions",
      description: "Assumptions are a necessary part of making conclusions and inferences from data. Formal training in Statistics and data science tends to encourage a mathematical and automatic treatment of assumptions, with relatively low expectations for justifying assumptions in the context of the problem or conveying the extent to which conclusions are conditional on assumptions. With so much focus on methods and computing, it is important to also take time to step back and more deeply consider the layers of assumptions that make up the foundation of any data analysis. I believe statisticians and data scientists have a responsibility to better convey the conditional nature of results, and to work with subject matter experts to translate and interrogate assumptions within a particular scientific context. While this is challenging in most problems, it is a necessary step toward better justifying the use of, and trust in, statistical results. The goal of this high-level talk is to increase, or re-highlight, awareness and spur discussion about related challenges and strategies.",
      room: "Room 2325",
      track: "General Track",
      time: "2:00 - 3:00",
      speaker_img: "/images/speakers/megan.png",
      // speaker_sup: "/images/speakers/megan_sup.png"
    },
    "Dr. Jim Hoover, University of Florida": {
      title: "The Latest Developments in the Implementation of AI in Business",
      description: "Ever since November 2022 when ChatGPT was released commercially, businesses have been pursuing the best approaches to implement AI into their processes. There has been a great deal of Fear of Missing Out (FOMO) related to this quest for value out of AI capabilities. In this talk, we will discuss what is working and what is not. And, we will explore how students can best position themselves for roles in AI as the technology continues to evolve in business.",
      room: "Room 2325",
      track: "General Track",
      time: "12:45 - 1:45",
      // speaker_img: "/images/speakers/jim.png",
      // speaker_sup: "/images/speakers/jim_sup.png"
    },
    "Dr. Andrew Gelman, Columbia University": {
      title: "Principles of Bayesian Workflow",
      description: "The Bayesian approach to data analysis provides a powerful way to handle uncertainty in all observations, model parameters, and model structure using probability theory. Probabilistic programming languages make it easier to specify and fit Bayesian models, but this still leaves us with many options regarding constructing, evaluating, and using these models, along with many remaining challenges in computation. Using Bayesian inference to solve real-world problems requires not only statistical skills, subject matter knowledge, and programming, but also awareness of the decisions made in the process of data analysis. All of these aspects can be understood as part of a tangled workflow of applied Bayesian statistics. Beyond inference, the workflow also includes iterative model building, model checking, validation and troubleshooting of computational problems, model understanding, and model comparison. We review all these aspects of workflow in the context of several examples, keeping in mind that in practice we will be fitting many models for any given problem, even if only a subset of them will ultimately be relevant for our conclusions.",
      room: "Room 2335",
      track: "Research Track",
      time: "12:45 - 1:45",
      speaker_img: "/images/speakers/andrew.png",
      speaker_sup: "/images/speakers/andrew_sup.png"
    },
    "Jhonathan Herrera, Colorstack": {
      title: "Intro to State Space Models and MAMBA",
      description: "This introduction workshop will provide you a foundational understanding of State Space Models (SSMs) and their applications in time-series modeling.",
      room: "Room 2365",
      track: "Workshop Track",
      time: "9:15 - 10:15",
      speaker_img: "/images/speakers/jhonathan.png",
      speaker_sup: "/images/speakers/jhonathan_sup.png"
    },
  };

  const openEventModal = (eventName) => {
    setSelectedEvent(eventDetails[eventName] || {
      title: eventName,
      description: "Details coming soon."
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const schedule = [
    {
      time: "7:30 - 8:00",
      event: "Registration and Refreshments",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "8:00 - 9:00",
      event: "Keynote Speaker: Jack Kendall, RainAI",
      type: "keynote",
      color: "bg-teal-50"
    },
    {
      time: "9:15 - 10:15",
      event: "Session #1",
      type: "sessions",
      tracks: {
        regular: "TBA",
        industry: "Carlos Bastos Neto, Google Cloud",
        speaker: "Dr. Aapo Hyvarinen, University of Helsinki",
        workshop: "Jhonathan Herrera, Colorstack"
      },
      color: "bg-purple-50"
    },
    {
      time: "10:15 - 10:30",
      event: "Short Break",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "10:30 - 11:30",
      event: "Session #2",
      type: "sessions",
      tracks: {
        regular: "Tony Barr, SAS Institute, AMOR",
        industry: "TBA",
        speaker: "Dr. Hubert Wagner",
        workshop: "Norman Bukingolts, Association of Computing Machinery"
      },
      color: "bg-purple-50"
    },
    {
      time: "11:30 - 12:15",
      event: "Short Break",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "11:45 - 12:30",
      event: "Student Poster Sessions",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "12:45 - 1:45",
      event: "Session #3",
      type: "sessions",
      tracks: {
        regular: "Dr. Jim Hoover, University of Florida",
        industry: "TBA",
        speaker: "Dr. Andrew Gelman, Columbia University",
        workshop: "Raul Valle, IEEE Signal Processing Society"
      },
      color: "bg-purple-50"
    },
    {
      time: "1:45 - 2:00",
      event: "Short Break",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "2:00 - 3:00",
      event: "Session #4",
      type: "sessions",
      tracks: {
        regular: "Dr. Megan Higgs",
        industry: "Tyler Richards, Snowflake, Ex-Meta",
        speaker: "TBA",
        workshop: "Kausthubh, American Statistical Association"
      },
      color: "bg-purple-50"
    },
    {
      time: "3:00 - 3:15",
      event: "Short Break",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "3:15 - 4:15",
      event: "Session #5",
      type: "sessions",
      tracks: {
        regular: "TBA",
        industry: "TBA",
        speaker: "TBA",
        workshop: "Jacques Fleischer, AI Club"
      },
      color: "bg-purple-50"
    },
    {
      time: "4:15 - 4:30",
      event: "Short Break",
      type: "break",
      color: "bg-blue-50"
    },
    {
      time: "4:30 - 5:00",
      event: "Closing Ceremony",
      type: "keynote",
      color: "bg-green-100"
    }
  ];

  const TrackCard = ({ track, room, speaker, onClick, type }) => {
    const isClickable = speaker !== "TBA" && speaker !== "[Presenter Name], Colorstac";
    const speakerDetails = eventDetails[speaker];

    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
              ${type === 'general' ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : ''}
              ${type === 'industry' ? 'bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300' : ''}
              ${type === 'research' ? 'bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300' : ''}
              ${type === 'workshop' ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''}
            `}>
              {track}
            </span>
            {isClickable && (
              <button
                onClick={() => onClick(speaker)}
                className="inline-flex items-center justify-center rounded-full w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                aria-label="View details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </button>
            )}
          </div>

          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">{room}</div>

          <div className="flex-grow">
            {/* Speaker name and title */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-5 mb-1">{speaker}</h3>
              {isClickable && speakerDetails?.title && (
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-5">
                  {speakerDetails.title}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 sm:pt-28 pb-8">
      <div className="relative">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="fixed sm:absolute bottom-4 right-4 sm:bottom-auto sm:top-0 sm:right-0 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg z-50"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 mt-10 text-gray-900 dark:text-white">DSI Spring Symposium 2025</h1>
        <p className="text-base sm:text-lg mb-4 text-gray-700 dark:text-gray-300">Join us for a day of learning, networking, and innovation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-3 sm:p-4 border-gray-200 dark:border-gray-700">
          <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">About the Symposium</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            The DSI Spring Research Symposium is a full-day conference featuring expert speakers,
            hands-on workshops, and student research presentations focused on artificial intelligence,
            data science, and machine learning.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Connect with industry leaders, faculty, and peers while exploring the latest trends in AI.
            Open to students of all majors and skill levels!
          </p>
        </div>

        <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-3 sm:p-4 border-gray-200 dark:border-gray-700">
          <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">Event Details</h2>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Location:</p>
              </div>
              <a href="https://maps.app.goo.gl/qfhEnip1UEGpFeTj9" target="_blank" rel="noopener noreferrer"
                className="ml-6 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                Reitz Union, University of Florida
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p>Venues:</p>
              </div>
              <p className="ml-6">Main Auditorium & 4 Track Session Rooms</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>Date: April 5, 2025</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p>Focus: Data Science & AI</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p>Open to: All UF Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg p-8 border border-blue-100 dark:border-blue-800 shadow-lg mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-800 dark:text-blue-300">Registration</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-5">Secure your spot for the DSI Spring Symposium 2025!</p>
        <a href="https://forms.gle/FkXfWQy7mE6dpYDF7" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Register Now
          </button>
        </a>
      </div>

      <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 mb-6 border-gray-200 dark:border-gray-700">
        <div className="p-3 sm:p-5">
          <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold mb-3">Event Schedule</h2>
          <div className="grid grid-cols-1 gap-3">
            {schedule.map((item, index) => (
              <div key={index} className={`${item.color} dark:bg-gray-700 rounded-lg p-3 transition-all duration-200 hover:shadow-md border border-gray-100 dark:border-gray-600`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="flex items-center gap-2 sm:w-32 shrink-0">
                    <div className="h-10 w-1 bg-blue-600 dark:bg-blue-400 rounded-full hidden sm:block" />
                    <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-gray-800 dark:text-white">{item.event}</span>
                    {item.tracks && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <TrackCard
                          track="General Track"
                          room="Room 2325"
                          speaker={item.tracks.regular}
                          onClick={openEventModal}
                          type="general"
                        />
                        <TrackCard
                          track="Industry Track"
                          room="Room 2330"
                          speaker={item.tracks.industry}
                          onClick={openEventModal}
                          type="industry"
                        />
                        <TrackCard
                          track="Research Track"
                          room="Room 2335"
                          speaker={item.tracks.speaker}
                          onClick={openEventModal}
                          type="research"
                        />
                        <TrackCard
                          track="Workshop Track"
                          room="Room 2365"
                          speaker={item.tracks.workshop}
                          onClick={openEventModal}
                          type="workshop"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white text-center">Collaborators</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">Speakers From</h3>
        </div>
        <div className="text-center">
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">Workshops From</h3>
        </div>
        <div className="text-center">
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">Student Organizations</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-3 sm:p-4 border-gray-200 dark:border-gray-700">
          <img
            src="/images/symposium-collaborators/speaker-affiliations.png"
            alt="Speaker Affiliations"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-3 sm:p-4 border-gray-200 dark:border-gray-700">
          <img
            src="/images/symposium-collaborators/workshop-orgs.png"
            alt="Workshop Organizations"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="border rounded-lg shadow-sm bg-white dark:bg-gray-800 p-3 sm:p-4 border-gray-200 dark:border-gray-700">
          <img
            src="/images/symposium-collaborators/other-student-orgs.png"
            alt="Other Collaborating Student Organizations"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {modalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedEvent.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {selectedEvent.time} • {selectedEvent.room}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Speaker image and organization logos */}
              {(selectedEvent.speaker_img || selectedEvent.speaker_sup || selectedEvent.speaker_sup_2) && (
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  {selectedEvent.speaker_img && (
                    <div className="flex-shrink-0">
                      <img
                        src={selectedEvent.speaker_img}
                        alt="Speaker"
                        className="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  )}
                  {selectedEvent.speaker_sup && (
                    <div className="h-10 flex-shrink-0">
                      <img
                        src={selectedEvent.speaker_sup}
                        alt="Organization logo"
                        className="h-full w-auto"
                      />
                    </div>
                  )}
                  {selectedEvent.speaker_sup_2 && (
                    <div className="h-10 flex-shrink-0">
                      <img
                        src={selectedEvent.speaker_sup_2}
                        alt="Additional organization logo"
                        className="h-full w-auto"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="prose max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{selectedEvent.description}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymposiumSchedule;