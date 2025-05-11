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
    "ADVANCING RESEARCH"
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

  return (
    <>
      <section
        id="home"
        className="relative z-10 flex min-h-[90vh] md:min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-black pt-16 md:pt-0"
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
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="mx-auto max-w-[900px] text-center flex flex-col h-auto justify-center">
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <h2 className="mb-1 sm:mb-2 text-base sm:text-lg font-medium italic text-white md:text-2xl px-2">
                    Data Science and Informatics at UF
                  </h2>
                  <h1 className="mb-0 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-white">
                    A COMMUNITY FOR
                  </h1>
                  
                  {/* Fixed height container with absolute positioning for text */}
                  <div className="relative h-[40px] xs:h-[45px] sm:h-[55px] md:h-[70px] lg:h-[85px] xl:h-[100px] flex items-center justify-center">
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                        fadeState === "in" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-white font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] xl:text-6xl whitespace-nowrap px-4">
                        {currentPhrase}
                      </div>
                    </div>
                  </div>
                  
                  {/* New accessibility sentence */}
                  <p className="text-white text-sm xs:text-base sm:text-lg italic mt-1 sm:mt-2 md:mt-3">
                    Making knowledge accessible to all
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-2 mt-6 sm:mt-4">
                  <Link
                    href="/about"
                    className="rounded-full bg-teal-500 px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white shadow-md transition-all duration-300 ease-in-out hover:bg-teal-600 hover:shadow-lg active:shadow-sm w-full sm:w-auto mb-3 sm:mb-0"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/workshops-list"
                    className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white shadow-md transition-all duration-300 ease-in-out hover:bg-white/30 hover:shadow-lg active:shadow-sm w-full sm:w-auto"
                  >
                    UPCOMING EVENTS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - hidden on small mobile screens */}
        <div className="absolute bottom-4 sm:bottom-10 left-0 right-0 flex justify-center animate-bounce hidden xs:flex">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
