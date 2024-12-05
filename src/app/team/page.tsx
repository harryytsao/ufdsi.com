import { Metadata } from "next";

import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Team",
  description: "team",
};

const TeamPage = () => {
  return (
    <section
      id="team"
      className="relative z-10 overflow-hidden bg-white pb-8 pt-[40px] dark:bg-gray-dark"
    >
      <div className="mx-auto py-14 sm:py-24 lg:py-32">
        <Team />
      </div>
    </section>
  );
};

export default TeamPage;
