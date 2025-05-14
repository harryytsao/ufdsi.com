"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import { Calendar } from "@/components/Workshop/Calendar";
import { motion } from "framer-motion";

import { Metadata } from "next";

// Metadata needs to be moved to a separate layout file for client components
// export const metadata: Metadata = {
//   title: "Events & Workshops | UF DSI",
//   description: "View our upcoming workshops, events, and activities. Join us for hands-on learning experiences, networking opportunities, and more.",
// };

const CalendarPage = () => {
  return (
    <>
      <section
        id="calendar"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Events & Workshops
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us for hands-on workshops, networking events, and learning opportunities. 
              Our events are designed to help you build skills, connect with peers, and 
              explore the exciting world of data science.
            </p>
          </motion.div>
        </div>
        <Calendar />
      </section>
      <ScrollUp />
    </>
  );
};

export default CalendarPage;

