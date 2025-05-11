import { Metadata } from "next";
import Team from "@/components/Team";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "Our Team | UF DSI",
  description: "Meet the dedicated team members of the UF Data Science and Informatics student organization",
};

const TeamPage = () => {
  return (
    <>
      <section
        id="team"
        className="relative z-10 overflow-hidden bg-white pt-[120px] dark:bg-gray-dark"
      >
        <div className="container mx-auto">
          <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
            <Team />
          </div>
        </div>
      </section>
      <ScrollUp />
    </>
  );
};

export default TeamPage;
