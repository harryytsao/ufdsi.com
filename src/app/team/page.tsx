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
      className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark"
    >
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <Team />
      </div>
    </section>
  );
};

export default TeamPage;
