import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container px-4 sm:px-8">
          <SectionTitle
            title="About Us"
            paragraph="The Data Science & Informatics (DSI) student organization at the University of Florida is the largest data science student organization in the state. Founded in 2015, we've grown into a vibrant community of over 1,500 members spanning all academic levels. Our mission is to democratize access to data science and AI education, foster a diverse and inclusive community, and prepare the next generation of leaders in these fields."
            center
          />

          <div className="grid grid-cols-1 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3">
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
