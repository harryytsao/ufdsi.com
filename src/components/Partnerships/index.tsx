"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Partnership logos
const partners = [
  {
    id: 1,
    name: "UF Information Technology",
    logo: "/images/partners/ufit.png",
    category: "university"
  },
  {
    id: 2,
    name: "UF CISE",
    logo: "/images/partners/ufcise.png",
    category: "university"
  },
  {
    id: 3,
    name: "UF DSI Research Center",
    logo: "/images/partners/ufdsi-center.png",
    category: "university"
  },
  {
    id: 4,
    name: "UF AI Center",
    logo: "/images/partners/ufai.png",
    category: "university"
  },
  {
    id: 5,
    name: "NVIDIA",
    logo: "/images/partners/nvidia.png",
    category: "industry"
  },
  {
    id: 6,
    name: "Google",
    logo: "/images/partners/google.png",
    category: "industry"
  },
  {
    id: 7,
    name: "Microsoft",
    logo: "/images/partners/microsoft.png",
    category: "industry"
  },
  {
    id: 8,
    name: "Amazon",
    logo: "/images/partners/amazon.png", 
    category: "industry"
  }
];

const fadeInUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Partnerships() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-teal-600 dark:text-teal-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Strong Connections
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-1 sm:mt-2 mb-3 md:mb-4">
            Our Partnerships
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
            DSI collaborates with leading industry partners and academic institutions to provide our members with unique opportunities and resources.
          </p>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 md:mb-8">
            University Partners
          </h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center"
          >
            {partners.filter(p => p.category === "university").map((partner) => (
              <motion.div
                key={partner.id}
                variants={fadeInUpItem}
                className="w-full max-w-[150px] sm:max-w-[180px] h-16 sm:h-20 md:h-24 relative flex items-center justify-center p-3 sm:p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 md:mb-8">
            Industry Partners
          </h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center"
          >
            {partners.filter(p => p.category === "industry").map((partner) => (
              <motion.div
                key={partner.id}
                variants={fadeInUpItem}
                className="w-full max-w-[150px] sm:max-w-[180px] h-16 sm:h-20 md:h-24 relative flex items-center justify-center p-3 sm:p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Interested in partnering with DSI?
          </p>
          <a 
            href="mailto:dsiufl@gmail.com" 
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-3 md:py-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:px-8 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
} 