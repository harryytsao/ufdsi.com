import ScrollUp from "@/components/Common/ScrollUp";
import { Calendar } from "@/components/Workshop/Calendar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
  description: "View our upcoming workshops, events, and activities.",
};

const CalendarPage = () => {
  return (
    <>
      <section
        id="calendar"
        className="relative z-10 overflow-hidden bg-white pb-8 pt-[120px] dark:bg-gray-dark"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="text-3xl font-bold text-center mb-8">
            Events Calendar
          </div>
        </div>
        <Calendar />
      </section>
      <ScrollUp />
    </>
  );
};

export default CalendarPage;

