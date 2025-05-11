import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import Achievements from "@/components/Achievements";
import Partnerships from "@/components/Partnerships";
import GetInvolved from "@/components/GetInvolved";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UF DSI - Data Science and Informatics",
  description: "University of Florida Data Science and Informatics - A community for data science, AI, machine learning and advancing research",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Initiatives />
      <Achievements />
      <Partnerships />
      <GetInvolved />
    </>
  );
}
