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
    title: "Technical Workshops",
    paragraph:
      "We hold workshops and to provide the resources to teach students valuable skills in Data Science that can further students career in research and industry",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/features/social.jpeg"
        alt="Social Events"
        width={600}
        height={400}
        className="object-cover rounded-lg w-full h-full"
      />
    ),
    title: "Social Events",
    paragraph:
      "Meet like-minded gators over activities such as potlucks, game nights, and collaborations with other clubs at UF",
  },
  {
    id: 3,
    icon: (
      <Image
        src="/images/features/networking.png"
        alt="Networking Events"
        width={600}
        height={400}
        className="object-cover rounded-lg w-full h-full"
      />
    ),
    title: "Networking with Industry and Academia",
    paragraph:
      "Get the chance to talk with recruiters in the data science industry and learn more about the different internship opportunities available",
  },
];

export default featuresData;
