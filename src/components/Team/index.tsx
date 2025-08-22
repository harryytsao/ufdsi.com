type Person = {
  name: string;
  position?: string;
  linkedin?: string;
  image?: string;
};

const PersonCard = ({ person }: { person: Person }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl group hover:translate-y-[-5px] w-full max-w-[280px]">
    <div className="h-56 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <img
        src={person.image || "https://via.placeholder.com/280x224"}
        alt={person.name}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{person.name}</h3>
      {person.position && (
        <span className="inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm font-medium text-teal-800 dark:text-teal-300 mb-4">
          {person.position}
        </span>
      )}
      <div className="flex items-center mt-4">
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm"
          >
            <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </div>
  </div>
);

const executives: Person[] = [
  {
    name: "Matheus Maldaner",
    position: "President",
    linkedin: "https://www.linkedin.com/in/matheusmaldaner/",
    image: "/images/people/2024-2025/2024_MatheusMaldaner_PresidentSpring.jpeg",
  },
  {
    name: "Aadhi Vijaisenthil",
    position: "Internal Vice President",
    linkedin: "https://www.linkedin.com/in/aadhitya-vijaisenthil/",
    image: "/images/people/2024-2025/2024_AadhityaVijaisenthi_WorkshopCoordinatorSpring.jpeg",
  },
  {
    name: "My Pham",
    position: "External Vice President",
    linkedin: "https://www.linkedin.com/in/my-pham-8554b8278/",
    image: "/images/people/2024-2025/2024_MyPham_EventCoordinatorSpring.jpeg",
  },
  {
    name: "Pranav Bhargava",
    position: "Treasurer",
    linkedin: "https://www.linkedin.com/in/pranavb15/",
    image: "/images/people/2024-2025/2024_PranavBhargava_SponsorshipCoordinatorSpring.jpeg",
  },
  {
    name: "Tristan Pank",
    position: "Workshop Director",
    linkedin: "https://www.linkedin.com/in/tristanpank/",
    image: "/images/people/2024-2025/2024_TristanPank_WorkshopCoordinatorSpring.jpeg",
  },
  {
    name: "Andria Gonzalez Lopez",
    position: "Networking Director",
    linkedin: "https://www.linkedin.com/in/andria-gonzalez-lopez-79713b21b/",
    image: "/images/people/2024-2025/2024_AndriaGonzalezLopez_NetworkingCoordinatorSpring.jpeg",
  },
  {
    name: "Safi Ali",
    position: "Secretary",
    linkedin: "https://www.linkedin.com/in/safi-ali-026b71325/",
    image: "/images/people/2024-2025/2024_SafiAli_SocialMediaCoordinatorSpring.jpeg",
  }
];

type JuniorRole = {
  title: string;
  members: Person[];
};

const juniorRoles: JuniorRole[] = [
  {
    title: "Workshop Coordinators",
    members: [
      { name: "Cecilia Cardenas", linkedIn: "https://www.linkedin.com/in/cecilia-elena-cardenas/", image: "/images/people/2024-2025/2024_CeciliaCardenas_WorkshopCoordinatorSpring.jpeg" },
      { name: "Marc Marquez", linkedIn: "https://www.linkedin.com/in/marc--marquez/", image: "/images/people/2024-2025/2024_MarcMarquez_WorkshopCoordinatorSpring.jpeg" },
      { name: "Aadhitya Vijaisenthi", linkedIn: "https://www.linkedin.com/in/aadhitya-vijaisenthil/", image: "/images/people/2024-2025/2024_AadhityaVijaisenthi_WorkshopCoordinatorSpring.jpeg" },
      { name: "Tristan Pank", linkedIn: "https://www.linkedin.com/in/tristan-pank/", image: "/images/people/2024-2025/2024_TristanPank_WorkshopCoordinatorSpring.jpeg" }
    ]
  },
  {
    title: "Social Media Coordinators",
    members: [
      { name: "Safi Ali", linkedIn: "https://www.linkedin.com/in/safi-ali-026b71325/", image: "/images/people/2024-2025/2024_SafiAli_SocialMediaCoordinatorSpring.jpeg" },
      { name: "Kaylee Pekar", linkedIn: "https://www.linkedin.com/in/kayleepekar/", image: "/images/people/2024-2025/2024_KayleePekar_SocialMediaCoordinatorSpring.jpeg" },
      { name: "Ron Beck", linkedIn: "https://www.linkedin.com/in/ronald-beck-156691321/", image: "/images/people/2024-2025/2024_RonBeck_SocialMediaCoordinatorSpring.jpeg" },
      { name: "Carlos Jusino", linkedIn: "https://www.linkedin.com/in/carlosdjusino/", image: "/images/people/2024-2025/2024_CarlosJusino_SocialMediaCoordinatorSpring.jpeg" }
    ]
  },
  {
    title: "Sponsorship Coordinators",
    members: [
      { name: "Pranav Bhargava", linkedIn: "https://www.linkedin.com/in/pranavb15/", image: "/images/people/2024-2025/2024_PranavBhargava_SponsorshipCoordinatorSpring.jpeg" },
      { name: "Grace Cavarretta", linkedIn: "https://www.linkedin.com/in/grace-cavarretta/", image: "/images/people/2024-2025/2024_GraceCavarretta_SponsorshipCoordinatorSpring.jpeg" },
      { name: "Brianna Fraga", linkedIn: "https://www.linkedin.com/in/brianna-fraga/", image: "/images/people/2024-2025/2024_BriannaFraga_SponsorshipCoordinatorSpring.jpeg" },
      { name: "Neha Jupalli", linkedIn: "https://www.linkedin.com/in/neha-jupalli-610063329/", image: "/images/people/2024-2025/2024_NehaJupalli_SponsorshipCoordinatorSpring.jpeg" }
    ]
  },
  {
    title: "Networking Coordinators",
    members: [
      { name: "Samantha Villafane", linkedIn: "https://www.linkedin.com/in/samantha-villafane-b8338b255/", image: "/images/people/2024-2025/2024_SamanthaVillafane_NetworkingCoordinatorSpring.jpeg" },
      { name: "Misha Shah", linkedIn: "https://www.linkedin.com/in/misha-s-shah/", image: "/images/people/2024-2025/2024_MishaShah_NetworkingCoordinatorSpring.jpeg" },
      { name: "Divij Goyal", linkedIn: "https://www.linkedin.com/in/divij-goyal23/", image: "/images/people/2024-2025/2024_DivijGoyal_NetworkingCoordinatorSpring.jpeg" },
      { name: "Bryson McGinley", linkedIn: "https://www.linkedin.com/in/brysonmcginley/", image: "/images/people/2024-2025/2024_BrysonMcGinley_NetworkingCoordinatorSpring.jpeg" },
      { name: "Andria Gonzalez Lopez", linkedIn: "https://www.linkedin.com/in/andria-gonzalez-lopez-79713b21b/", image: "/images/people/2024-2025/2024_AndriaGonzalezLopez_NetworkingCoordinatorSpring.jpeg" }
    ]
  },
  {
    title: "Webmasters",
    members: [
      { name: "Autumn Qiu", linkedIn: "https://www.linkedin.com/in/autumn-qiu/", image: "/images/people/2024-2025/2024_AutumnQiu_WebmasterSpring.jpeg" },
      { name: "Suchir Kolli", linkedIn: "https://www.linkedin.com/in/suchir-kolli-9a5288293/", image: "/images/people/2024-2025/2024_SuchirKolli_WebmasterSpring.jpeg" },
      { name: "Carlos Hernandez", linkedIn: "https://www.linkedin.com/in/carlos-hernandez2/", image: "/images/people/2024-2025/2024_CarlosHernandez_WebmasterSpring.jpeg" }
    ]
  },
  {
    title: "Event Coordinators",
    members: [
      { name: "Analise Stuart", linkedIn: "https://www.linkedin.com/in/analise-stuart-366425301/", image: "/images/people/2024-2025/2024_AnaliseStuart_EventCoordinatorSpring.jpeg" },
      { name: "My Pham", linkedIn: "https://www.linkedin.com/in/my-pham-8554b8278/", image: "/images/people/2024-2025/2024_MyPham_EventCoordinatorSpring.jpeg" },
      { name: "Sandra Hanushchik", linkedIn: "https://www.linkedin.com/in/sandra-hanuschik/", image: "/images/people/2024-2025/2024_SandraHanushchik_EventCoordinatorSpring.jpeg" },
      { name: "Shravya Sama", linkedIn: "https://www.linkedin.com/in/shravya-sama-7850a0217/", image: "/images/people/2024-2025/2024_ShravyaSama_EventCoordinatorSpring.jpeg" }
    ]
  },
];

const Team = () => {
  return (
    <div className="bg-white dark:bg-gray-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       

        {/* Section for Executives */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white inline-block relative">
              Executive Board
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {executives.map((person, index) => (
              <PersonCard key={`exec-${index}`} person={person} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
