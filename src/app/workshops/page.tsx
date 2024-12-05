import ScrollUp from "@/components/Common/ScrollUp";
import { Calendar } from "@/components/Workshop/Calendar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description: "Discover our interactive workshops and hands-on learning experiences designed to enhance your skills.",
};

const Workshops = () => {
  return (
    <>
      <section
        id="workshops"
        className="relative z-10 overflow-hidden bg-white pb-8 pt-[120px] dark:bg-gray-dark"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="text-3xl font-bold text-center mb-8">
            Upcoming Workshops & Events
          </div>
        </div>
        <Calendar />
      </section>
      <ScrollUp />
    </>
  );
};

export default Workshops;

