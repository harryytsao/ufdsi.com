type Person = {
  name: string;
  position?: string;
  linkedIn?: string;
  image?: string;
};

const PersonCard = ({ person }: { person: Person }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
    <img
      src={person.image || "https://via.placeholder.com/150"}
      alt={person.name}
      className="w-32 h-32 rounded-full mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
    <p className="text-gray-600">{person.position}</p>
    <div className="flex space-x-4 mt-4">
      {person.linkedIn && (
        <a href={person.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
          <svg
            width="25"
            height="25"
            viewBox="0 0 17 16"
            className="fill-current"
          >
            <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
          </svg>
        </a>
      )}
    </div>
  </div>
);

const executives: Person[] = [
  {
    name: "Matheus Maldaner",
    position: "President",
    linkedIn: "https://www.linkedin.com/in/matheusmaldaner/",
    image: "/images/people/matheus.jpeg"
  },
  {
    name: "Kaavya Polavarapu",
    position: "Internal Vice President",
    linkedIn: "https://www.linkedin.com/in/kaavya-polavarapu/",
    image: "/images/people/kaavya.jpeg"
  },
  {
    name: "Harry Tsao",
    position: "External Vice President",
    linkedIn: "https://www.linkedin.com/in/harrytsao/",
    image: "/images/people/harry.jpeg"
  },
  {
    name: "Michele Hirn",
    position: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/michele-hirn/",
    image: "/images/people/michele.jpeg"
  },
  {
    name: "Marielle Doenges",
    position: "Workshop Director",
    linkedIn: "https://www.linkedin.com/in/marielledoenges/",
    image: "/images/people/marielle.jpeg"
  },
  {
    name: "Sanjana Dundigalla",
    position: "Secretary",
    linkedIn: "https://www.linkedin.com/in/sanjana-dundigalla/",
    image: "/images/people/sanjana.jpeg"
  },
];

type JuniorRole = {
  title: string;
  members: Person[];
};

const juniorRoles: JuniorRole[] = [
  {
    title: "Workshop Coordinators",
    members: [
      { name: "Ishan Kumthekar", linkedIn: "https://www.linkedin.com/in/ishan-kumthekar-080827255/", image: "/images/people/ishan.jpeg" },
      { name: "Cecilia Cardenas", linkedIn: "https://www.linkedin.com/in/cecilia-elena-cardenas/", image: "/images/people/cecilia.jpeg" },
      { name: "Marc Marquez", linkedIn: "https://www.linkedin.com/in/marc--marquez/", image: "/images/people/marc.jpeg" },
      { name: "Aadhitya Vijaisenthi", linkedIn: "https://www.linkedin.com/in/aadhitya-vijaisenthil/", image: "/images/people/aadhitya.jpeg" },
      { name: "Tristan Pank", linkedIn: "https://www.linkedin.com/in/tristan-pank/", image: "/images/people/tristan.jpeg" }
    ]
  },
  {
    title: "Sponsorship Coordinators",
    members: [
      { name: "Safi Ali", linkedIn: "https://www.linkedin.com/in/safi-ali-026b71325/", image: "/images/people/safi.jpeg" },
      { name: "Kaylee Pekar", linkedIn: "https://www.linkedin.com/in/kayleepekar/", image: "/images/people/kaylee.jpeg" },
      { name: "Ron Beck", linkedIn: "https://www.linkedin.com/in/ronald-beck-156691321/", image: "/images/people/ron.jpeg" },
      { name: "Carlos Jusino", linkedIn: "https://www.linkedin.com/in/carlosdjusino/", image: "/images/people/carlos.jpeg" }
    ]
  },
  {
    title: "Social Media Coordinators",
    members: [
      { name: "Pranav Bhargava", linkedIn: "https://www.linkedin.com/in/pranavb15/", image: "/images/people/pranav.jpeg" },
      { name: "Grace Cavarretta", linkedIn: "https://www.linkedin.com/in/grace-cavarretta/", image: "/images/people/grace.jpeg" },
      { name: "Brianna Fraga", linkedIn: "https://www.linkedin.com/in/brianna-fraga/", image: "/images/people/brianna.jpeg" },
      { name: "Neha Jupalli", linkedIn: "https://www.linkedin.com/in/neha-jupalli-610063329/", image: "/images/people/neha.jpeg" }
    ]
  },
  {
    title: "Networking Coordinators",
    members: [
      { name: "Samantha Villafane", linkedIn: "https://www.linkedin.com/in/samantha-villafane-b8338b255/", image: "/images/people/samantha.jpeg" },
      { name: "Misha Shah", linkedIn: "https://www.linkedin.com/in/misha-s-shah/", image: "/images/people/misha.jpeg" },
      { name: "Divij Goyal", linkedIn: "https://www.linkedin.com/in/divij-goyal23/", image: "/images/people/divij.jpeg" },
      { name: "Bryson McGinley", linkedIn: "https://www.linkedin.com/in/brysonmcginley/", image: "/images/people/bryson.jpeg" },
      { name: "Andria Gonzalez Lopez", linkedIn: "https://www.linkedin.com/in/andria-gonzalez-lopez-79713b21b/", image: "/images/people/andria.jpeg" }
    ]
  },
  {
    title: "Webmasters",
    members: [
      { name: "Autumn Qiu", linkedIn: "https://www.linkedin.com/in/autumn-qiu/", image: "/images/people/autumn.jpeg" },
      { name: "Suchir Kolli", linkedIn: "https://www.linkedin.com/in/suchir-kolli-9a5288293/", image: "/images/people/suchir.jpeg" },
      { name: "Carlos Hernandez", linkedIn: "https://www.linkedin.com/in/carlos-hernandez2/", image: "/images/people/carlos-h.jpeg" }
    ]
  },
  {
    title: "Event Coordinators",
    members: [
      { name: "Analise Stuart", linkedIn: "https://www.linkedin.com/in/analise-stuart-366425301/", image: "/images/people/analise.jpeg" },
      { name: "My Pham", linkedIn: "https://www.linkedin.com/in/my-pham-8554b8278/", image: "/images/people/my.jpeg" },
      { name: "Sandra Hanushchik", linkedIn: "https://www.linkedin.com/in/sandra-hanuschik/", image: "/images/people/sandra.jpeg" },
      { name: "Shravya Sama", linkedIn: "https://www.linkedin.com/in/shravya-sama-7850a0217/", image: "/images/people/shravya.jpeg" }
    ]
  },
];

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Meet Our Officers
        </h2>

        {/* Section for Executives */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Executive Board
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {executives.map((person, index) => (
              <PersonCard key={`exec-${index}`} person={person} />
            ))}
          </div>
        </div>

        {/* Section for Junior Board */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Junior E-Board
          </h3>
          {juniorRoles.map((role, roleIndex) => (
            <div key={`role-${roleIndex}`} className="mb-8">
              <h4 className="text-xl font-medium text-gray-700 mb-4">
                {role.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {role.members.map((person, index) => (
                  <PersonCard key={`${role.title}-${index}`} person={person} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;