import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | UF DSI",
  description: "Learn more about the University of Florida Data Science and Informatics initiative",
};

const AboutPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-gray-200 pb-16 dark:border-gray-700 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[540px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    About Data Science & Informatics
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    The UF Data Science and Informatics (DSI) initiative is a community dedicated to promoting data science education, research, and collaboration at the University of Florida.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Our mission is to create a vibrant ecosystem where students, faculty, and industry partners can come together to explore the frontiers of data science and develop innovative solutions to real-world problems.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    We offer workshops, networking events, research opportunities, and a supportive community for anyone interested in data science, machine learning, artificial intelligence, and related fields.
                  </p>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <img
                      src="/images/hero/landing-page.jpg"
                      alt="UF DSI Community"
                      className="mx-auto max-w-full lg:ml-auto rounded-md shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 