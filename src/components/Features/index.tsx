import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="About Us"
            paragraph="The Data Science & Informatics (DSI) club at the University of Florida, founded in 2019, is dedicated to helping undergraduate students explore the world of data science. Through workshops, research projects, networking events, and hackathons, DSI provides valuable opportunities to develop skills in AI, machine learning, data visualization, data analytics, and even more. Our goal is to equip students with the knowledge and connections they need to succeed in this fast-growing field." //, which is located across from Marston Science Library, side of the CSE Building
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
