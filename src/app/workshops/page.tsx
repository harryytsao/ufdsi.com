import ScrollUp from "@/components/Common/ScrollUp";
import {Calendar, CalendarTitle} from "@/components/Workshop/Calendar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description: "workshops",
  // other metadata
};

const Workshops = () => {
  return (
    <>
      <section
        id="workshops"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <CalendarTitle title="Check out our various workshop and learning opportunities!"/>
        <Calendar />
      </section>
    </>
  );
};

export default Workshops;

