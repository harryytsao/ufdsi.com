"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  // Define the phrases in the desired order
  const phrases = [
    "DATA SCIENCE",
    "ARTIFICIAL INTELLIGENCE",
    "MACHINE LEARNING",
    "ADVANCING RESEARCH", 
    "YOU"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [fadeState, setFadeState] = useState("in"); // "in", "out"
  
  useEffect(() => {
    let phraseIndex = 0;
    
    const switchPhrase = () => {
      // Fade out current text
      setFadeState("out");
      
      // After fade out, change text and fade in
      setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setCurrentPhrase(phrases[phraseIndex]);
        setFadeState("in");
      }, 500); // Half a second for fade out
    };
    
    // Set up interval for phrase changes
    const interval = setInterval(switchPhrase, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    "UF Student Organization of the Year Winner",
    "Hosted Research Symposiums for 2025 and 2024",
    "Winner of the UF Career Influencer Award"
  ];

  const [currentHighlight, setCurrentHighlight] = useState(highlights[0]);
  const [highlightFade, setHighlightFade] = useState("in");

  useEffect(() => {
    let highlightIndex = 0;
    const switchHighlight = () => {
      setHighlightFade("out");
      setTimeout(() => {
        highlightIndex = (highlightIndex + 1) % highlights.length;
        setCurrentHighlight(highlights[highlightIndex]);
        setHighlightFade("in");
      }, 500);
    };
    const interval = setInterval(switchHighlight, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero/landing-page.jpg"
            alt="UF Building"
            fill
            sizes="100vw"
            className="object-cover object-center dark:opacity-60"
            priority
            style={{ 
              objectPosition: "center 35%", 
              transform: "scale(1.1)" 
            }}
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="mx-auto max-w-[900px] text-center px-4 flex flex-col h-auto justify-center">
                <div className="mb-16 md:mb-20">
                  <h2 className="mb-1 sm:mb-2 text-lg font-medium italic text-white md:text-2xl">
                    Data Science and Informatics at UF
                  </h2>
                  <h1 className="mb-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white whitespace-nowrap">
                    A COMMUNITY FOR
                  </h1>
                  
                  {/* Fixed height container with absolute positioning for text */}
                  <div className="relative h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] xl:h-[100px] flex items-center justify-center">
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                        fadeState === "in" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] xl:text-6xl whitespace-nowrap px-4">
                        {currentPhrase}
                      </div>
                    </div>
                    
                  </div>
                  <h2 className="mb-1 sm:mb-2 text-lg font-medium italic text-white md:text-2xl">
                    Making knowledge accessible to all
                  </h2>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Link
                    href="/about"
                    className="rounded-full bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 ease-in-out hover:bg-teal-600 hover:shadow-lg active:shadow-sm"
                  >
                    LEARN MORE
                  </Link>
                </div>
                {/* Highlights Section (pyramid layout, transparent boxes, with images, spaced below) */}
                {/* <div className="mt-24 flex flex-col items-center w-full">
                  <span className="mb-4 text-base sm:text-lg font-semibold uppercase tracking-widest text-teal-200 drop-shadow-md" style={{letterSpacing: '0.15em'}}>Highlights</span>
                  <div className="flex flex-col items-center w-full gap-4">
                    
                    <div className="flex justify-center w-full">
                      <div className="flex flex-col sm:flex-row items-center bg-white/30 dark:bg-gray-800/40 rounded-xl shadow-lg px-8 py-5 font-extrabold text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg backdrop-blur-md max-w-xl w-full text-center border border-white/20 dark:border-gray-700">
                        <div className="mb-3 sm:mb-0 sm:mr-5 flex-shrink-0">
                          <img src="/images/newsletter/org-of-year.jpg" alt="Student Org of Year" className="w-20 h-20 object-cover rounded-full border-4 border-white/60 shadow" />
                        </div>
                        <span>UF Student Organization of the Year Winner</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-row justify-center w-full gap-6 flex-wrap">
                      <div className="flex flex-col sm:flex-row items-center bg-white/30 dark:bg-gray-800/40 rounded-xl shadow-lg px-8 py-5 font-extrabold text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg backdrop-blur-md max-w-md w-full text-center border border-white/20 dark:border-gray-700">
                        <div className="mb-3 sm:mb-0 sm:mr-5 flex-shrink-0">
                          <img src="/images/newsletter/symposium.jpg" alt="Symposiums" className="w-16 h-16 object-cover rounded-full border-4 border-white/60 shadow" />
                        </div>
                        <span>Hosted Research Symposiums for 2025 and 2024</span>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center bg-white/30 dark:bg-gray-800/40 rounded-xl shadow-lg px-8 py-5 font-extrabold text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg backdrop-blur-md max-w-md w-full text-center border border-white/20 dark:border-gray-700">
                        <div className="mb-3 sm:mb-0 sm:mr-5 flex-shrink-0">
                          <img src="/images/newsletter/influencer.jpg" alt="Career Influencer" className="w-16 h-16 object-cover rounded-full border-4 border-white/60 shadow" />
                        </div>
                        <span>Winner of the UF Career Influencer Award</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
