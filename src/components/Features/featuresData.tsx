import Image from "next/image";
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/features/workshop.jpeg"
        alt="Technical Workshops"
        width={600}
        height={400}
        className="object-cover rounded-lg w-full h-full"
      />
    ),
    title: "Education & Skills Development",
    paragraph:
      "Our technical workshops, hands-on training sessions, and certification programs help students develop practical skills in data science, AI, machine learning, and software engineering.",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/features/social.jpeg"
        alt="Community & Networking"
        width={600}
        height={400}
        className="object-cover rounded-lg w-full h-full"
      />
    ),
    title: "Community & Networking",
    paragraph:
      "With over 1,100 Discord members and 1,500 Instagram followers, we foster connections through social events, industry panels, and collaborations with faculty, alumni, and other organizations.",
  },
  {
    id: 3,
    icon: (
      <Image
        src="/images/features/networking.png"
        alt="Research & Competitions"
        width={600}
        height={400}
        className="object-cover rounded-lg w-full h-full"
      />
    ),
    title: "Research & Competitions",
    paragraph:
      "We lead in competitions like DataFest, AI Days, and hackathons, while our annual symposium showcases cutting-edge research through expert speakers and hands-on workshops.",
  },
];

export default featuresData;
