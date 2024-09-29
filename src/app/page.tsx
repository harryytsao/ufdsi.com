import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/People";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UF DSI",
  description: "University of Florida Data Science and Informatics Club",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
